const {By} = require('selenium-webdriver');

const homePageLocators = {
    pageLoc: By.id('searchform'),
    searchInput: By.name('q')
}

module.exports = {homePageLocators}