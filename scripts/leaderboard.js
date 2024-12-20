const LEADERBOARD_STORAGE_KEY = 'leaderboardData';
const LEADERBOARD_EXPIRY_KEY = 'leaderboardExpiry';

async function populateLeaderboard(sortBy = 'referrals') {
    // Check if the data is in localStorage and is fresh
    const storedData = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
    const storedExpiry = localStorage.getItem(LEADERBOARD_EXPIRY_KEY);
    const now = new Date().getTime();

    if (leaderboardCaching) {
        if (storedData && storedExpiry && now - storedExpiry < leaderboardCacheTime) {
            console.log('Loading leaderboard from localStorage');
            const leaderboardData = JSON.parse(storedData);
            renderLeaderboard(leaderboardData);
            return;
        }
    }

    try {
        const web3 = AlchemyWeb3.createAlchemyWeb3(endpoint);

        if (!web3.utils.isAddress(presaleAddress)) {
            console.log("Invalid presale address:", presaleAddress);
            return;
        }

        console.log(`Populating ${nativeCurrencySymbol} transactions for presale address:`, presaleAddress);
        const transactions = await web3.alchemy.getAssetTransfers({
            toAddress: presaleAddress,
            category: ['external'],
            asset: nativeCurrencySymbol,
            order: 'asc',
        });

        if (!transactions.transfers.length) {
            console.log('No transactions found.');
            leaderboardList.innerHTML = 'No transactions found...';
            return;
        }

        const ethUsdPrice = await getEthUsdPrice();
        const senders = {};
        const referralCounts = {};
        const leaderboardData = [];

        // Iterate through all transactions
        for (const tx of transactions.transfers) {
            const sender = tx.from;
            const amountFloat = parseFloat(tx.value);

            if (senders[sender]) {
                senders[sender] += amountFloat;
            } else {
                senders[sender] = amountFloat;
            }

            // Decode the referral address from the transaction input
            const decodedReferralAddress = await decodeReferralAddress(tx.hash);

            if (decodedReferralAddress) {
                // Check if the referral address is the same as the sender's address
                if (sender.toLowerCase() === decodedReferralAddress.toLowerCase()) {
                    console.log(`Omitting self-referral for address: ${sender}`);
                    continue; // Skip adding points if it's a self-referral
                }

                // Increment the referral count for the decoded address if it matches a sender
                if (referralCounts[decodedReferralAddress]) {
                    referralCounts[decodedReferralAddress]++;
                } else {
                    referralCounts[decodedReferralAddress] = 1;
                }
            }
        }

        // Combine senders and referral counts into a single array
        const combinedData = Object.entries(senders).map(([sender, amount]) => {
            return {
                sender,
                amount,
                referrals: referralCounts[sender] || 0 // Default to 0 if no referrals
            };
        });

        // Sort the data based on the specified criterion
        const sortedData = combinedData.sort((a, b) => {
            if (sortBy === 'referrals') {
                return b.referrals - a.referrals || b.amount - a.amount;
            } else if (sortBy === 'contributions') {
                return b.amount - a.amount || b.referrals - a.referrals;
            }
        }).slice(0, maxLeaderboardRows);

        leaderboardList.innerHTML = ''; // Clear previous list

        // Populate the leaderboard and store in the array
        for (const { sender, amount, referrals } of sortedData) {
            let adjustedAmount = amount;

            if (amount > maximumContribution && maximumContribution != 0) {
                adjustedAmount = maximumContribution;
            } else if (amount < minimumContribution) {
                continue; // Skip this entry if below minimumContribution
            }

            // Log the adjustedAmount to ensure it's correct
            // console.log(`Adjusted Amount for ${sender}: ${adjustedAmount}`);
            const finalAdjustedAmount = parseFloat(adjustedAmount).toFixed(4);
            const amountNum = parseFloat(adjustedAmount);
            let usdAmount = '';

            if (ethUsdPrice !== null) {
                usdAmount = ` ($${(amountNum * ethUsdPrice).toFixed(2)})`;
            }

            const ensName = await resolveAddressToENS(sender);
            let displayName = ensName ? ensName : truncateAddress(sender, 6);

            if (ensName && ensName.length > 10) {
                displayName = truncateAddress(ensName, 4);
            }

            const listItem = {
                position: leaderboardData.length + 1,
                wallet: displayName,
                amount: finalAdjustedAmount + ` ${nativeCurrencySymbol}${usdAmount}`,
                points: referrals
            };

            leaderboardData.push(listItem);

            const listItemElement = document.createElement('div');
            listItemElement.className = 'leaderboard-item';

            listItemElement.innerHTML = `
                <span class="leaderboard-position">${listItem.position}</span>
                <span class="leaderboard-wallet">
                    <a href="${blockExplorerURL}/address/${sender}" target="_blank">${listItem.wallet}</a>
                </span>
                <span class="leaderboard-amount">${listItem.amount}</span>
                <span class="leaderboard-referrals">${listItem.points}</span>
            `;

            leaderboardList.appendChild(listItemElement);
        }

        // Check if there are no valid transactions within the min or max amount
        if (leaderboardData.length === 0) {
            console.log('No transactions found within the contribution range.');
            leaderboardList.innerHTML = 'No transactions found within the contribution range...';
            return;
        }

        // Store the leaderboard data and expiry time in localStorage
        localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(leaderboardData));
        localStorage.setItem(LEADERBOARD_EXPIRY_KEY, now.toString());

        console.log('Leaderboard data successfully loaded and stored for', leaderboardCacheTime, 'ms');
    } catch (error) {
        console.error('Error fetching transactions:', error);
        leaderboardList.innerHTML = 'Error fetching transactions...';
    }
}
function renderLeaderboard(leaderboardData) {
    leaderboardList.innerHTML = ''; // Clear previous list

    leaderboardData.forEach(item => {
        const listItemElement = document.createElement('div');
        listItemElement.className = 'leaderboard-item';

        listItemElement.innerHTML = `
            <span class="leaderboard-position">${item.position}</span>
            <span class="leaderboard-wallet">
                <a href="${blockExplorerURL}/address/${item.wallet}" target="_blank">${item.wallet}</a>
            </span>
            <span class="leaderboard-amount">${item.amount}</span>
            <span class="leaderboard-referrals">${item.points}</span>
        `;

        leaderboardList.appendChild(listItemElement);
    });
}

async function decodeReferralAddress(txHash) {
    try {
        const response = await fetch(`${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                method: 'eth_getTransactionByHash',
                params: [txHash],
                id: 1
            })
        });

        const result = await response.json();
        const transaction = result.result;
        const data = transaction.input;

        if (data && data !== '0x') {
            const decodedAddress = '0x' + data.slice(data.length - 40);
            // console.log("DECODER: Decoded Referral Address:", decodedAddress);
            return decodedAddress;
        } else {
            // console.log("DECODER: No data field found or data is null.");
            return null;
        }
    } catch (error) {
        console.error("Failed to decode referral address:", error);
        return null;
    }
}

async function getEthUsdPrice() {
    try {
        const mainnetProvider = new ethers.providers.CloudflareProvider();

        // Chainlink ETH/USD Price Feed address on Ethereum mainnet
        const chainlinkUSDPriceFeed = "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419"; // Replace with the actual address if different

        // Chainlink Price Feed ABI for `latestAnswer`
        const priceFeedABI = [
            {
                "inputs": [],
                "name": "latestAnswer",
                "outputs": [
                    { "internalType": "int256", "name": "", "type": "int256" }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];

        // Create a contract instance
        const priceFeed = new ethers.Contract(chainlinkUSDPriceFeed, priceFeedABI, mainnetProvider);

        // Fetch the latest ETH/USD price
        const latestAnswer = await priceFeed.latestAnswer();

        // The `latestAnswer` provides the ETH/USD price, scaled by 10^8
        const ethUsdPrice = parseFloat(latestAnswer) / 1e8; // Convert to USD (from 8 decimal places)
        console.log("ETH/USD Price:", ethUsdPrice);
        return ethUsdPrice;
    } catch (error) {
        console.error('Error fetching ETH/USD price:', error);
        return null;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    if (refreshLeaderboard && leaderboardCheckInterval > 0) {
        setInterval(populateLeaderboard, leaderboardCheckInterval);
    } else {
        if (sortByReferrals) {
            populateLeaderboard('referrals');
            console.log('Sorting leaderboard by referrals...');
        } else {
            populateLeaderboard('contributions');
            console.log('Sorting leaderboard by contributions...');
        }
    }
});