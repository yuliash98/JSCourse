require('chromedriver');
const {assert} = require('chai');

class BasePage {
    constructor(browser, locator) {
        this.browser = browser;
        this.locator = locator;
        this.isOpened = async () => {
            const result = await this.browser.isDisplayed(this.locator);
            assert.isTrue(result, 'Page is not opened');
          };
    }
}

module.exports = BasePage;