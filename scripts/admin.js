let timeoutDuration = 3000;

document.addEventListener('walletConnected', function () {
    console.log('Connected wallet is', connectedWallet);
    console.log('Presale wallet is', presaleAddress);

    setTimeout(() => {
        timeoutDuration = 1000;
    }, 3000);

    // Convert both addresses to lowercase before comparing
    if (connectedWallet.toLowerCase() === presaleAddress.toLowerCase()) {
        showAlert('info', 'The Presale Wallet is Currently Connected.. Revealing admin panel.', {
            dismissTime: 10000
        });

        isAdmin = true;
        adminPanel.style.display = 'flex';

        login();
    } else {
        console.log('Connected wallet is not admin...');
        isAdmin = false;
    }
});

async function login() {
    loggedIn = true;
    console.log('Logging in...', 'loggedIn value: ', loggedIn);

    adminLoadingBar.style.display = 'block';

    adminLoadingBar.style.animationDuration = `${timeoutDuration / 1000}s`;

    // Wait for 2 seconds then hide the loading bar and show the main admin panel
    setTimeout(function () {
        adminLoadingBar.style.display = 'none';

        showAlert('info', 'Presale wallet logged in. Press the connect wallet button to show or hide the admin panel.', {
            dismissTime: 10000
        });

        // Get the current text from the connect wallet button
        let connectWalletText = connectWalletButton.innerHTML;
        console.log('Current connect wallet button text:', connectWalletText);

        populateAdminTools();
    }, timeoutDuration);
}

function populateAdminTools() {
    console.log('Populating admin tools...');

    adminTools.style.display = 'flex';
}