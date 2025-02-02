const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

// Log the Chrome binary path
console.log('Chrome binary path:', '/usr/bin/google-chrome');

const options = new chrome.Options();
options.setChromeBinaryPath('/usr/bin/google-chrome');

// Add unique user data directory
const userDataDir = path.join(__dirname, 'chrome-user-data-dir');
options.addArguments(`--user-data-dir=${userDataDir}`);
options.addArguments("--disable-extensions");
options.addArguments("--no-sandbox");
options.addArguments("--disable-gpu");
options.addArguments("--disable-dev-shm-usage");
options.addArguments("--headless");

async function runTest() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://f43f-185-164-16-241.ngrok-free.app');
        let title = await driver.getTitle();
        console.log('Page Title: ', title);
    } finally {
        await driver.quit();
    }
}

runTest().catch(err => console.error(err));
