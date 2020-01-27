const BasePage = require('../../framework/basePage');
const {resultPageLocators} = require('./constants');
const {assert} = require('chai');

class ResultPage extends BasePage{
    constructor(browser, locator) {
        super(browser, locator);
    }

    async checkResultNumber() {
        const result = await this.browser.getText(resultPageLocators.searchResult);
        const numbs = result.replace(/[^.\d]+/g,"");
        const resultNumber = numbs.substring(0, numbs.length - 3);
        assert.isTrue(resultNumber > 100000, "Number of results is less than 100000")
    }

    async isLinkShown() {
        const result = await this.browser.isDisplayed(resultPageLocators.linkLoc);
        assert.isTrue(result, 'Link is not shown on the firsr page');
    }
}

module.exports = ResultPage;