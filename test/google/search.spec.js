const {describe, it} = require('mocha');
const HomePage = require('../../pages/homePage');
const ResultPage = require('../../pages/resultPage');
const Browser = require('../../framework/browser');
const {homePageLocators} = require('../../pages/homePage/constants');
const {resultPageLocators} = require('../../pages/resultPage/constants');
const {assert} = require('chai');
const chai = require('chai');
const chaiWebdriver = require('chai-webdriver');


describe('Google Search TestSuite', function() {
    let browser;

    before(async () => {
        browser = new Browser();
        await browser.start();
        this.homePage = new HomePage(browser, homePageLocators.pageLoc);
        this.resultPage = new ResultPage(browser, resultPageLocators.pageLoc);
        //chai.use(chaiWebdriver(browser.driver));
    })

    after(async () => {
        await browser.quit();

    })

    it('should search for "webdriver"', async () => {
        await this.homePage.isOpened();
        await this.homePage.search("webdriver");
        await this.resultPage.isOpened();
        //await chai.expect('#fakebox-input').dom.to.contain.value('webdriver');
    });

    it('should find more than 100000 results', async () => {
        await this.resultPage.checkResultNumber();
    });

    it('should show "https://selenium.dev/projects/" link on the first page', async () => {
        await this.resultPage.isLinkShown();
    });
});