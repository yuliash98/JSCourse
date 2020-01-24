const {describe, it} = require('mocha');
const HomePage = require('../../pages/homePage');
const logger = require('../../utils/log.util');
const Browser = require('../../framework/browser')

describe('Google Search TestSuite', () => {
    let browser;

    before(async () => {
        browser = new Browser();
        await browser.start();
    })

    after(async () => {
        await browser.quit();

    })

    it('should search for "webdriver"', async () => {
        const homePage = new HomePage(browser);
        homePage.search("webdriver");
    });
});