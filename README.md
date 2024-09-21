<p align="left">
  <img src="assets/tukyologo.png" alt="Logo" width="600">
</p>

<!-- ![License](https://img.shields.io/github/license/username/repository)
![Build Status](https://img.shields.io/github/actions/workflow/status/username/repository/build.yml)
![Latest Release](https://img.shields.io/github/v/release/username/repository) -->

<!-- omit in toc -->
# RaiseKit • An Onchain Front-End Crowdfunding Solution
![HTML5](https://img.shields.io/badge/-HTML-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

<!-- omit in toc -->
## Table of Contents
- [Getting Started](#getting-started)
- [Update Project Details](#update-project-details)
  - [List of All Variables](#list-of-all-variables)
  - [Understanding Bool Interactions \& Contextual Values](#understanding-bool-interactions--contextual-values)
- [Replace Assets](#replace-assets)
- [Host Front-End](#host-front-end)
- [SEO](#seo)
    - [Meta Tags](#meta-tags)
    - [Website Title](#website-title)
    - [Canonical Index](#canonical-index)
- [What's Next?](#whats-next)

<!-- omit in toc -->
## TL;DR
This repo is a framework built to assist you with setting up your project's frontend and presale user interface. You may redistribute, copy or edit any of the contents within this repository. Please do not use this framework to scam people. Life is short and creating cool things is fun. Give it a try!

The ultimate goal of this framework is to create a pipeline for small teams that are seeking funding for their crypto project to launch a website with minimal effort.

You may reach out to the developer on telegram https://t.me/tukyowave - or by email tko@tukyowave.com

If you are interested in working with us on a project launch and would like to to develop a more custom solution, please reach out for further discussion!

## Getting Started

**| Step 1:** [Download](https://google.com/) this repository or clone it to your local device.

**| Step 2:** Open the repository in your code editor of choice. You will need to edit the **projectdetails.js** file within the **scripts** folder. When editing in Visual Studio Code, you can get the **Live Server** extension, then right-click the **index.html** file to see an immediate preview of the website as you edit the project details.

**| Step 3:** Get the necessary credentials for website setup. This includes a presale address if your project has a presale, your endpoint url for blockchain interactions or your token details if already launched.

**| Step 4:** Update the necessary variables within the **projectdetails.js** file. This is explained in further detail below.

**| Step 5:** Setup hosting for the website once you finish editing and styling.

## Update Project Details
When you open the **projectdetails.js** file you will be greeted by a wall of text. This cumbersome documentation is necessary for explaining further specifics that cannot be covered in this brief guide. The part that you should be focusing on are the many variables that will populate your website with your project's information.

<p align="left">
  <img src="assets/preview.png" alt="Logo" width="1200">
</p>

**Example Variable:**
```var projectTitle = "Project Title";```

When you change the string that is within the quotes and save the **projectdetails.js** file you will immediately see the new title on your website. This applies to all variables within the script! They are declared at a global scope and loaded before all other scripts within the framework.

### List of All Variables

||||||
|----|------|------|-------|-------|
|**Project Details**|||||
|projectTitle|projectDescription|aboutImageDescription|||
|**Blockchain Info**|||||
|chainID|chainName|nativeCurrencyName|nativeCurrencySymbol|nativeCurrencyDecimals|
|blockExplorerURL|||||
|**Crypto Details**|||||
|endpoint|contractAddress|totalSupply|tokenName|tokenSymbol|
|lp|tax||tokenDecimals|tokenType|
|**Presale & Leaderboards**|||||
|isPresale|presaleAddress|presaleTarget|launchDate|refreshTotalContributions|
|minimumContribution|maximumContribution|leaderboardEnabled|maxLeaderboardRows|contributionCheckInterval|
|**Wallet Connectivity**|||||
|isWalletEnabled|||||
|**Buy Section**|||||
|isBuyingEnabled|buyLink|buyDescription|||
|**Theme & Styling**|||||
|theme|blockchainColor|backgroundColor|mainColor|secondaryColor|
|accentColor|fontFamily|fontColor|fontColorSecondary|linkColor|
|linkHoverColor|||||
|**Navigation**|||||
|navigationEnabled|navigationLinks||||
|telegramLink|twitterLink|discordLink|githubLink|extraLink|

### Understanding Bool Interactions & Contextual Values
```isPresale``` ```leaderboardEnabled``` ```isWalletEnabled``` ```isBuyingEnabled``` ```navigationEnabled```

These bools can all be set to **true** or **false** within the **projectdetails.js** file. There are many edge-cases when setting up your website, and they have been accounted for within the code. 

The ```navigationEnabled``` bool is isolated, and will not have any effect on the other parameters. This bool simply disables or enables the navigation in the header to focus on specific areas of the page.

The ```leaderboardEnabled``` bool is dependant on the ```isPresale``` bool. It will default to **false** when there is no presale for your project. ```isPresale``` will **not** be automatically set to false when the presale timer ends. This causes the leaderboard to remain even after the presale has ended.

The ```isPresale``` and ```isBuyingEnabled``` bool interact heavily. They also have specific cases dependant on the **presaleTimer**. If both bools are **true** the buy button will not be enabled until after the **presaleTimer** has concluded. If the presale has concluded, and buying is enabled, the contributions and leaderboard section will remain visible, but the buy button will now redirect users to purchase your token via the DEX link you have input within the **projectdetails.js** file. If buying is not enabled and the **presaleTimer** has concluded, it will no longer allow the user to contribute, and will notify them that buying will be enabled soon.

The ```isWalletEnabled``` bool has an effect on the presale contribution process. If this bool is set **true**, users will be able to contirbute directly to your presale wallet from the website. Buying is done via a new page, so wallet connectivity is not factored into the process of buying your token once it has liquidity and is tradeable on a DEX. If the bool is **false** users will not be able to connect to the website with their web3 wallet, and the contribution process will not be handled via your website.

The ```minimumContribution``` and ```maximumContribution``` values play a role in dynamically updating the UI and restricting the user on the front-end from sending more or less than the allowed contribution amount. When they are both set to ```0``` there will be no limit. The leaderboard will show any contributions at any value, up to the ```maxLeaderboardRows```. When you do set a minimum and maximum value for the contribution, the front-end will attempt to stop a user from sending more or less. It is still up to you to review the contributions, and determine if a user sent more or less than is required for your presale. The leaderboard will also be updated to show values within the minimum and maximum when they are set.

## Replace Assets
Once you have the setup the global variables within the **projectdetails.js** file your website should be getting close to what you want it to look like. The last part is editing the images for the website.

Navigate to the **assets** folder and replace the images within. It is highly recommended to use webp format, but png or is also accepted. You can also use a video file for the main hero image slot, but this might incur higher hosting costs for you.

Each file in the assets folder is the exact name that it needs to be for the scripts to reference them correctly. If you change any file names, you will need to edit any references to these files within the code. This includes the *entire filename* such as ```hero-1140x700```. You may safely remove any files that you will not be replacing with custom images.

## Host Front-End

## SEO
After you have completed the hosting setup for your code, you will then need to initialize the metadata and SEO properties within the **index.html** file. This file is setup to guide you through the specific information that needs to be filled in.

You must manually add these details within the **index.html** file due to the fact that certain website crawlers might not execute js scripts. Meaning dynamically populated data from the **projectdetails.js** file might not reflect correctly.

Navigate to the header section, in here you will find these regions and elements that need to be updated:

#### Meta Tags
• ```<!-- #region Meta Tags -->```


#### Website Title
• ```<title>WEBSITE TITLE</title>```

#### Canonical Index
• ```<link rel="canonical" href="TODO: ENTER MAIN DOMAIN HERE EXAMPLE: https://website.com/">```

## What's Next?
After completing all of the steps above, you will be ready to host your frontend. You will be responsible for all the next steps, including what happens after your presale concludes. There are no smart contracts within this framework, so claiming tokens must be done via other methods, or you must airdrop the presale allocation to your users. This modular framework is ready to be adjusted for your needs, and these functions could be included by following other guides and documentation online.