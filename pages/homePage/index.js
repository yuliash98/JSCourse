const {Key} = require('selenium-webdriver');
const {homePageLocators} = require('./constants');
const BasePage = require('../../framework/basePage');

class HomePage extends BasePage{
    constructor(browser, locator) {
        super(browser, locator);
    }

    async search(text) {
        const input = await this.browser.findElement(homePageLocators.searchInput, 'Search Input');
        await input.sendKeys(text, Key.RETURN);
    }
}

module.exports = HomePage;