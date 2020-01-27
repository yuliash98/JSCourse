const {By} = require('selenium-webdriver');

const resultPageLocators = {
    pageLoc: By.id('search'),
    searchResult: By.id('resultStats'),
    linkLoc: By.xpath(`//a[@href = "https://selenium.dev/projects/"]`)
}

module.exports = {resultPageLocators}