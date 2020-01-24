require('chromedriver');
const {Builder, Capabilities} = require('selenium-webdriver');
const config = require('../config.json');
const logger = require('../utils/log.util');

class Browser {
    constructor() {
        this.driver;
    }

    async start() {
        const capabilities = Capabilities.chrome();
        capabilities.set('chromeOptions', {
            'args':['--disable-plugins']
        });
        this.driver = await new Builder().forBrowser('chrome').withCapabilities(capabilities).build();
        try {
            await this.driver.get(config.startURL);
            await this.driver.manage.setTimeouts(config.timeouts);
            logger.info('Browser is started')
        } catch(error) {
            logger.error(`Cannot start browser: ${error}`)
        }
    }

    async quit() {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(async () => {
                    await this.driver.quit();
                    resolve();
                }, 500)
            } catch (error) {
                logger.warning(`Error during closing the browser: ${error}`);
                reject();
            }
        })
    }

    async findElement(by, name) {
        try {
            return this.driver.findElement(by);
        } catch(error) {
            logger.error(`Cannot find element ${name}: ${error}`)
        }
    }
}

module.exports = Browser;