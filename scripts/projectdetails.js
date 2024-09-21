// Description: This file contains the project details.
// Input the correct details for your project below. These will be displayed on the website.
//
// If you have questions, please contact the developer of this framework
// Contact Info: Telegram (@tukyowave) - Email (tko@tukyowave.com)
//
// General Project Details Section
//
// Input the title of your project here
var projectTitle = "Project Title";
// Input your project description here. Each element in the array below will be displayed as a separate paragraph in the about section
// Make sure to separate each line with a comma
// *** If you want more than two paragraphs, create more in the html in the about section ***
var projectDescription = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];
// Input the description for the about image here
var aboutImageDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
//
// Chain Details Section
//
// You will also need to enter the chainID for the blockchain you are using
// Enter the chain ID in the exact format as shown below, with no quotations or extra characters
//
// Chain IDs: https://chainlist.org/
//
var chainID = "0x2105";
// Enter the correct details for your blockchain here, this is used if the user is not connected to the correct blockchain and they need to add it to their wallet
var chainName = "Base Mainnet";
var nativeCurrencyName = "ETH";
var nativeCurrencySymbol = "ETH";
var nativeCurrencyDecimals = 18;
var blockExplorerURL = "https://basescan.org";
// Wallet Section
//
// Set this value below to true if you would like to enable wallet connectivity, false if you would not
var isWalletEnabled = true;
//
//
// Token Details
//
// Input your project's token address here so that it can be displayed on the website
var contractAddress = "0x21b9D428EB20FA075A29d51813E57BAb85406620";
// Input the total supply of your token here as you wish for it to be displayed, with or without punctuation
var totalSupply = "1,000,000";
// Input the token name below
var tokenName = "Token Name";
// Input the token symbol below
var tokenSymbol = "TKN";
// Input the token decimals below
var tokenDecimals = "18";
// Input the token standard below
var tokenType = "ERC20";
// Input the initial LP amount below
var lp = "5 ETH";
// Input the tax information for your token
var tax = "2% / 2%";
// If you would like to display the presale information on the website, enter your endpoint here
// *** It is recommended to keep your API key within your server's environment variables instead of referencing it here ***
// *** If a malicious actor gains access to your API key, they can overload your endpoint, causing you to incur costs, or the presale details to not display correctly ***
var endpoint = "https://base-mainnet.g.alchemy.com/v2/oF3-SAEZZHqyYLKC4xWZsTMr_l5zwQo9";
// If you have leaderboards enabled you must use an alchemy endpoint, or you will need to modify the leaderboard.js file to work with the endpoint provider you have chosen
// The leaderboard creates a web3 instance using built-in alchemy functions to retrieve information about the highest contributors to your presale
//
// Within your alchemy project, you will also need to grab you mainnet endpoint for ENS capture and resolve
var endpointMainnet = "https://eth-mainnet.g.alchemy.com/v2/oF3-SAEZZHqyYLKC4xWZsTMr_l5zwQo9";
//
// Presale & Leaderboard Section
// The presale code has only been tested using ETH as the currency for contributions, you may run into issues if you are using a different currency
//
// If you have a presale, set isPresale to true and input the presale details below
// Set to true if you have a presale, false if you do not
// *** Do not enable buying if a presale is active, as it will cause the "Buy" button to display instead of the "Contribute" button ***
// If your presale has concluded, you do not need to set this bool to false, the website will automatically display the "Buy" button once the presale has concluded
// This bool is simply to define if your project will have a presale or not
var isPresale = true;
// Input the presale wallet address below
var presaleAddress = "0xA66DF2f59C6e37E66a063EE3A82eA63C0D521d14";
// Input the target amount for the presale as a number with no extra characters
var presaleTarget = "1";
// Input the date when your presale will start here in the exact format as shown below
// The contribution buttons will only be enabled when the current date is greater than the start date
var startDate = "2024-09-04T03:00:00Z";
// Input the date when your presale will end here in the exact format as shown below
// The current format is UTC "Z" indicates that
var launchDate = "2024-09-05T15:00:00Z";
//
// Input the minimum and maximum contribution amounts for the presale
// If the leaderboard is enabled, the displayed contribution will be capped at the maximum amount
// Contributions less than the minimum amount will not be displayed
// If you input "0" for both the minimum and maximum amounts, the leaderboard will display all contributions and there will be no contribution limit enforced on the front=end
// Do not set the maximum contribution amount to less than the minimum contribution amount - you WILL face issues
var minimumContribution = "0.00001";
var maximumContribution = "1";
//
// The refreshTotalContributions bool below is used to determine if the total contributions should be refreshed every contributionCheckInterval or not
// By default, this is set to false. This will only refresh the total contributions when the page is loaded
// If you would like to update this value on an interval, set the bool to true, then set the interval in milliseconds
var refreshTotalContributions = false;
// How often to check for the total contributions
// Default is 1 second (1000 milliseconds)
var contributionCheckInterval = 1000;
//
var leaderboardEnabled = true;
//
// The two variables below are used to determine if the leaderboard should be refreshed on an interval or not
// This will incurr additional endpoint costs, so it is recommended to keep this disabled unless you need to display the leaderboard in real-time
// If this is disabled, your users might find it awkward that the leaderboard is not refreshing until they refresh the page
var refreshLeaderboard = false;
var leaderboardCheckInterval = 1000;
// You can also use local storage to cache the leaderboard data for a certain amount of time
// There is a cookie stored in the user's browser that will determine if the leaderboard should be refreshed or not, meaning their cache will need to be cleared if they want to refresh the leaderboard
var leaderboardCaching = true;
var leaderboardCacheTime = 60000; // 1 minute
//
// Input the maximum number of rows you would like to display on the leaderboard
// The more rows you display will incur more endpoint costs
var maxLeaderboardRows = 100;
//
// Referral Section
//
// If referrals are enabled for your project, set isReferralEnabled to true
// To read more about the referral system, visit the readme
var isReferralEnabled = true;
// You may also determine if the leaderboard should be sorted by referrals or total contributions
// When this is false the leaderboard will default to sort by total contributions 
var sortByReferrals = false;
//
// Buy Section
//
// Set to true if you would like to enable buying, false if you would not
// It is recommended to keep this disabled if a presale is active
// If you have concluded your token presale, disable "isPresale" and enable "isBuyingEnabled" after inputting your contract address above
var isBuyingEnabled = true;
// Input the direct hyperlink for buying the token below, this will open a new page when the "Buy" button is clicked
var buyLink = "https://app.uniswap.org/swap?outputCurrency=0x21b9D428EB20FA075A29d51813E57BAb85406620";
var buyDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
//
// Theme Section
//
// If you would like to change the theme of the website, you can do so here
// *** Please note that changing the theme may require additional CSS changes to ensure the website displays correctly ***
//
// Use the theme variable below to set the look and style of your website
// Themes are in the theme folder, input the name of the theme file below to set the theme
var theme = "defaultstyle";
//
// Hex Color Picker: https://g.co/kgs/p5J5tg2
// Color Palette Generator: https://paletton.com/
//
// Input the hex color value (Example: #000000) for the blockchain your project is launching on. The default blockchain is "Base" and it is blue
// This color will be shown when hovering over the wallet connect button
var blockchainColor = "#0052ff"
//
// Input the hex color value for the background color of the website. The default color is black
var backgroundColor = "#000000"
//
// The colors below are used for accenting different parts of the website.
// Input the main color for the website. The default color is white
var mainColor = "#ffffff"
// Input the secondary color for the website. The default color is gray
var secondaryColor = "#979797"
// Input the accent color for the website. The default color is blue dark gray
var accentColor = "#454545"
// The next section is for the text and links on the website.
// Input the font family details, this will be used to determine the style of the text on the website
//
// Font-Family options: https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
//
// This framework currently does not support custom fonts, however you can feel free to add them yourself
// You can add a custom font by importing it in the css file and then inputting the font name below
// Alternatively, you can use the google fonts API to import a font and then use it in the css file
//
var fontFamily = "Arial, sans-serif"
// Input the font color for the website. The default color is white
var fontColor = "#ffffff"
// Input the secondary font color for the website. The default color is black
var fontColorSecondary = "#000000"
// Input the link color for the website. The default color is white
var linkColor = "#ffffff"
// Input the link hover color for the website. This is the color that links will change to when hovered. The default color is yellow
var linkHoverColor = "#ffff00"
//
//
// Navigation Section
// Below you can update the navigation links for the website
// You can also disable the navigation completely by setting "navigationEnabled" to false
var navigationEnabled = true;
//
// Input the navigation link details below
// The "Name" should be the text displayed on the navigation link in the header, the user will see this
// The "Link" should be the ID of the section on the website that the navigation link will scroll to
// *** If you change any IDs in the html, make sure to update the links here to match the new IDs ***
var navigationLinks = [
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Leaderboard",
        link: "#leaderboard",
    },
    {
        name: "Tokenomics",
        link: "#tokenomics",
    },
];
//
// Social Media Section
// Below you can update the social media links for the website
// If you do not want to display a specific social media link, set the variable string to "None"
var telegramLink = "https://t.me/tukyowave";
var twitterLink = "https://twitter.com/tukyowave";
var discordLink = "None";
var githubLink = "None";
// The extra icon is for an additional social media link you would like to display - it will be displayed as a globe icon
var extraLink = "None";
//
//
// *** Do not edit below this line ***

let projectTitleValue;
let logoImg;

let contractAddressValue;
let totalSupplyValue;
let lpValue;
let taxValue;

let presaleContainer;
let referralsContainer;
let currentDate;

let connectWalletButton;
let connectedWallet;
let buyButton;
let presaleButton;

let presaleStatus;
let presaleTargetMet;

let presaleContributionInputContainer;
let presaleContributionInputfield;
let presaleReferralInputfield;
let presaleContributionConfirmButton;
let presaleContributionCancelButton;
let userContributions;
let presaleLoader;

let buyContributionInputContainer;
let buyContributionInputfield;
let buyReferralInputfield;
let buyContributionConfirmButton;
let buyContributionCancelButton;
let buyLoader;

let generateReferralLinkButton;
let referralLoader;
let referralLink;
let ensButton;
let ensPrompt;

let contributionInputs;
let contributionRange;

let leaderboard;
let leaderboardList;

let navElement;
let hamburgerMenuButton;

let isAdmin = false;
let loggedIn = false;
let adminLoadingBar;
let adminPanel;
let adminTools;

let twitterIcon;
let telegramIcon;
let discordIcon
let githubIcon;

let validWalletAddress = /^0x[a-fA-F0-9]{40}$/;
let validENS = /^([a-z0-9-]+\.)*eth$/i;

let chainlinkUSDPriceFeed = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";

// On page load, display the project details throughout the website
document.addEventListener('DOMContentLoaded', async function () {
    window.addEventListener('resize', handleResize);
    document.title = projectTitle;
    projectTitleValue = document.getElementById('project-title-value')
    logoImg = document.getElementById('logo-img');

    contractAddressValue = document.getElementById('contract-address-value');
    totalSupplyValue = document.getElementById('total-supply-value');
    lpValue = document.getElementById('lp-value');
    taxValue = document.getElementById('tax-value');

    presaleContainer = document.getElementById('presale');
    referralsContainer = document.getElementById('referrals');

    connectWalletButton = document.getElementById('connect-wallet-button');
    buyButton = document.getElementById('buy-button');
    presaleButton = document.getElementById('presale-button');

    generateReferralLinkButton = document.getElementById('generate-referral-link-button');
    referralLoader = document.getElementById('referral-loader');
    
    referralLink = document.getElementById('referral-link-value');
    ensButton = document.getElementById('ens-button');
    ensPrompt = document.getElementById('ens-prompt');

    presaleContributionInputContainer = document.getElementById('presale-contribution-input-container');
    presaleContributionInputContainer.style.display = 'none';
    presaleContributionInputfield = document.getElementById('presale-contribution-input');
    presaleReferralInputfield = document.getElementById('presale-referral-input');
    presaleContributionConfirmButton = document.getElementById('presale-contribution-confirm-button');
    presaleContributionCancelButton = document.getElementById('presale-contribution-cancel-button');
    userContributions = document.getElementById('user-contributions');
    presaleLoader = document.getElementById('presale-loader');

    buyContributionInputContainer = document.getElementById('buy-contribution-input-container');
    buyContributionInputContainer.style.display = 'none';
    buyContributionInputfield = document.getElementById('buy-contribution-input');
    buyReferralInputfield = document.getElementById('buy-referral-input');
    buyContributionConfirmButton = document.getElementById('buy-contribution-confirm-button');
    buyContributionCancelButton = document.getElementById('buy-contribution-cancel-button');
    buyLoader = document.getElementById('buy-loader');

    contributionInputs = document.querySelectorAll('.contribution-input');
    contributionRange = document.querySelectorAll('.contribution-range');

    leaderboard = document.getElementById('leaderboard');
    leaderboardList = document.getElementById('leaderboard-list');

    navElement = document.getElementById('nav');
    hamburgerMenuButton = document.getElementById('hamburger-button');

    adminLoadingBar = document.getElementById('admin-loading-bar');
    adminPanel = document.getElementById('admin');
    adminTools = document.getElementById('admin-tools');

    twitterIcon = document.getElementById('twitter-icon').parentElement;
    telegramIcon = document.getElementById('telegram-icon').parentElement;
    discordIcon = document.getElementById('discord-icon').parentElement;
    githubIcon = document.getElementById('github-icon').parentElement;
    extraIcon = document.getElementById('extra-icon').parentElement;

    projectTitleValue.innerHTML = projectTitle;
    totalSupplyValue.innerHTML = totalSupply;
    lpValue.innerHTML = lp;
    taxValue.innerHTML = tax;

    if (isPresale) {
        presaleContainer.style.display = 'flex';

        presaleStatus = checkPresaleTimer();

        if (presaleStatus === "The presale has concluded.") {
            presaleButton.style.display = 'none';
        } else if (presaleStatus === "The presale has not begun.")  {
            presaleButton.textContent = 'Coming Soon';
            presaleButton.style.display = 'block';
            presaleButton.addEventListener('click', presaleNotStarted);
        } else {
            presaleButton.addEventListener('click', startContribution);
        }

        if (leaderboardEnabled) {
            leaderboard.style.display = 'flex';
        } else {
            leaderboard.style.display = 'none';
        }
    } else {
        presaleContainer.style.display = 'none';
        leaderboard.style.display = 'none';
        referralsContainer.style.display = 'none';
    }

    if (isWalletEnabled) {
        connectWalletButton.style.display = 'block';
        if (isReferralEnabled) {
            referralsContainer.style.display = 'flex';
        } else {
            referralsContainer.style.display = 'none';
        }
    } else {
        connectWalletButton.style.display = 'none';
        presaleButton.style.display = 'none';
        referralsContainer.style.display = 'none';
    }

    contributionRange.forEach(function (element) {
        element.textContent = "Minimum Contribution: " + minimumContribution + " " + nativeCurrencySymbol + " • Maximum Contribution: " + maximumContribution + " " + nativeCurrencySymbol;

        if (minimumContribution === "0" && maximumContribution === "0") {
            element.textContent = "No Contribution Limit";
        }
    });

    if (isBuyingEnabled) {
        if (isPresale) {
            presaleStatus = checkPresaleTimer();

            if (presaleStatus === "The presale has concluded.") {
                buyButton.textContent = 'Buy';
                contractAddressValue.innerHTML = contractAddress;

            } else if (presaleStatus === "The presale has not begun.")  {
                buyButton.textContent = 'Coming Soon';
                contractAddressValue.innerHTML = "The presale has not begun. Please check back later!";

                buyButton.addEventListener('click', presaleNotStarted);
            } else {
                if (isWalletEnabled) {
                    buyButton.textContent = 'Contribute';
                    buyButton.addEventListener('click', startContribution);
                } else {
                    buyButton.textContent = 'Coming Soon';
                }

                contractAddressValue.innerHTML = "The contract address will be available after the presale concludes and buying is enabled for the token.";
            }
        } else {
            buyButton.textContent = 'Buy';
            contractAddressValue.innerHTML = contractAddress;

            buyButton.addEventListener('click', function () {
                window.open(buyLink, '_blank');
            });
        }
    } else {
        if (isPresale) {
            presaleStatus = checkPresaleTimer();

            if (presaleStatus === "The presale has concluded.") {
                buyButton.textContent = 'Coming Soon';

                contractAddressValue.innerHTML = "The presale has concluded. Buying will be enabled shortly!";
            } else if (presaleStatus === "The presale has not begun.")  {
                buyButton.textContent = 'Coming Soon';

                contractAddressValue.innerHTML = "The presale has not begun. Please check back later!";
            } else {
                if (isWalletEnabled) {
                    buyButton.textContent = 'Contribute';
                    buyButton.addEventListener('click', startContribution);
                } else {
                    buyButton.textContent = 'Coming Soon';
                }

                contractAddressValue.innerHTML = "The contract address will be available after the presale concludes and buying is enabled for the token.";
            }
        }
        else {
            const buyRightSplit = document.getElementById('buy-right-split');
            buyRightSplit.style.display = 'none';
        }
    }

    if (navigationEnabled) {
        const navLinks = navElement.querySelectorAll('a');
        navLinks.forEach(link => link.remove());
        navigationLinks.forEach(link => {
            const anchor = document.createElement('a');
            anchor.textContent = link.name;
            anchor.href = link.link;
            anchor.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default anchor behavior
                const targetSection = document.querySelector(link.link);
    
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
    
            navElement.insertBefore(anchor, connectWalletButton);
        });  
        
        hamburgerMenuButton.addEventListener('click', toggleNav);
    } else {
        const navLinks = navElement.querySelectorAll('a');
        navLinks.forEach(link => link.remove());
    
        console.log('Navigation disabled...');
    }
    

    if (twitterLink == "None") {
        twitterIcon.remove();
    } else {
        twitterIcon.href = twitterLink;
    }
    if (telegramLink == "None") {
        telegramIcon.remove();
    } else {
        telegramIcon.href = telegramLink;
    }
    if (discordLink == "None") {
        discordIcon.remove();
    } else {
        discordIcon.href = discordLink;
    }
    if (githubLink == "None") {
        githubIcon.remove();
    } else {
        githubIcon.href = githubLink;
    }
    if (extraLink == "None") {
        extraIcon.remove();
    } else {
        extraIcon.href = extraLink;
    }

    setTheme(theme);
    updateCSSVariables();
    populateProjectDescriptions();
    handleResize();
    logProjectData();

    checkEndpointConnection(endpoint, chainName);
    checkEndpointConnection(endpointMainnet, 'Mainnet');
});
function setTheme(theme) {
    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'theme/' + theme + '.css';
    document.head.appendChild(linkElement);
}
function updateCSSVariables() {
    const root = document.documentElement;

    root.style.setProperty('--blockchain-color', blockchainColor);
    root.style.setProperty('--background-color', backgroundColor);
    root.style.setProperty('--main-color', mainColor);
    root.style.setProperty('--secondary-color', secondaryColor);
    root.style.setProperty('--accent-color', accentColor);
    root.style.setProperty('--font-family', fontFamily);
    root.style.setProperty('--font-color', fontColor);
    root.style.setProperty('--font-color-secondary', fontColorSecondary);
    root.style.setProperty('--link-color', linkColor);
    root.style.setProperty('--link-highlight-color', linkHoverColor);
}
function populateProjectDescriptions() {
    projectDescription.forEach((description, index) => {
        const paragraph = document.getElementById(`description-paragraph-${index}`);
        if (paragraph) {
            paragraph.textContent = description;
        }
    });
    const aboutImageParagraph = document.getElementById('about-image-paragraph');
    if (aboutImageParagraph) {
        aboutImageParagraph.textContent = aboutImageDescription;
    }
    const buyDescriptionElement = document.getElementById('buy-description-paragraph');
    if (buyDescriptionElement) {
        buyDescriptionElement.textContent = buyDescription;
    }
}
function logProjectData() {
    console.log(
        "Project Information:",
        "\nTitle: " + projectTitle,
        "\nBlockchain: ", chainName,
        "\nWallet Enabled: ", isWalletEnabled,
        "\nPresale: ", isPresale,
        "\n", presaleStatus,
        "\nLeaderboards: ", leaderboardEnabled,
        "\nReferrals: ", isReferralEnabled
    );
}
function toggleNav() {
    if (navElement.style.display === 'flex') {
        navElement.style.display = 'none';
        hamburgerMenuButton.classList.remove('active');
    } else {
        navElement.style.display = 'flex';
        hamburgerMenuButton.classList.add('active');
    }
}
function handleResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 950) {
        navElement.style.display = 'none';
    } else {
        navElement.style.display = 'flex';
    }
    if (windowWidth <= 400) {
        logoImg.src = 'assets/logo_alt.png';
    } else {
        logoImg.src = 'assets/logo.png';
    }
}
async function checkEndpointConnection(endpoint, type) {
    try {
        const web3Mainnet = AlchemyWeb3.createAlchemyWeb3(endpoint);
        const isListening = await web3Mainnet.eth.net.isListening();

        if (isListening) {
            console.log(type, "endpoint is connected.");
            return true;
        } else {
            console.log(type, "endpoint is not connected.");
            return false;
        }
    } catch (error) {
        console.error('Error checking Alchemy endpoint connection:', error.message);
        return false;
    }
}
async function resolveENSName(ensName) {
    try {
        const web3Mainnet = AlchemyWeb3.createAlchemyWeb3(endpointMainnet);
        const resolvedAddress = await web3Mainnet.eth.ens.getAddress(ensName);
        console.log(`Resolved ENS ${ensName} to address: ${resolvedAddress}`);
        return resolvedAddress;
    } catch (error) {
        console.error(`Error resolving ENS ${ensName}:`, error);
        return null;
    }
}
async function resolveAddressToENS(address) {
    try {
        const provider = new ethers.providers.JsonRpcProvider(endpointMainnet);
        const ensName = await provider.lookupAddress(address);

        if (ensName) {
            console.log(`Resolved address ${address} to ENS: ${ensName}`);
            return ensName;
        } else {
            console.log(`No ENS found for address: ${address}`);
            return null;
        }
    } catch (error) {
        console.error(`Error resolving address ${address} to ENS:`, error);
        return null;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let arrows = [
        'ArrowUp', 'ArrowUp', 'ArrowDown',
        'ArrowDown', 'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA', 'Enter'
    ];
    let currentPosition = 0;
    let timer;
    const CODE_TIMEOUT = 2000; // Time allowed between key presses in milliseconds

    document.addEventListener('keydown', (e) => {
        if (arrows[currentPosition] === e.code) {
            console.log("Correct key: " + e.code);
            currentPosition++;

            clearTimeout(timer);
            if (currentPosition === arrows.length) {
                console.log("Arrows entered...");
                const sections = document.querySelectorAll('section');
                sections.forEach(section => {
                  section.classList.toggle('flip');
                });
                currentPosition = 0; // Reset the position for the next attempt
            } else {
                timer = setTimeout(() => {
                    console.log("Timeout, try again.");
                    currentPosition = 0; // Reset the position due to timeout
                }, CODE_TIMEOUT);
            }
        } else {
            console.log("Incorrect key, try again.");
            currentPosition = 0; // Reset the position if the wrong key is pressed
        }
    });
});
async function getNativeCurrencyBalance() {
    const url = endpoint;
    const requestData = {
        jsonrpc: "2.0",
        method: "eth_getBalance",
        params: [presaleAddress, "latest"],
        id: 1
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
        const data = await response.json();
        if (data.result) {
            const balanceInWei = data.result;
            const balanceInEth = Web3.utils.fromWei(balanceInWei, 'ether');
            const balanceInEthNumber = parseFloat(balanceInEth); // Convert to number
            displayTotalContributions(balanceInEthNumber);
            displayPercentage(balanceInEthNumber);
        } else {
            console.error('Failed to fetch balance:', data);
        }
    } catch (error) {
        console.error('Error fetching balance:', error);
    }
}
// #endregion Global Helper Functions