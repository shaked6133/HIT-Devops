const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');  // Add the chromedriver package

// Path to the chromedriver and chromium
const chromeDriverPath = chromedriver.path;  // Automatically fetches path from the chromedriver package
const chromeBinaryPath = '/usr/bin/chromium-browser';  // Adjust if needed

const options = new chrome.Options();
options.setChromeBinaryPath(chromeBinaryPath);

async function runTest() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .setChromeService(new chrome.ServiceBuilder(chromeDriverPath).build())  // Use chromedriver's path automatically
    .build();

  try {
    await driver.get('https://f43f-185-164-16-241.ngrok-free.app/login.html');
    let title = await driver.getTitle();
    console.log('Page Title: ', title);
  } finally {
    await driver.quit();
  }
}

runTest().catch((err) => console.error(err));
