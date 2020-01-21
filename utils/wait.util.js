const logger = require('../utils/log.util');

const doWait = (action, interval, expectedValue) => {
    return new Promise((resolve, reject) => {
        if(action() === expectedValue) {
            setTimeout(() => resolve(), interval)
        }
        setTimeout(() => reject(), interval)
    })
}

var count = 0

const retrier = () => {  
}


class Wait {
    forTrue(action, maxCount, interval) {
        count++
        logger.info(`[${count}] Wait for true`)
        return doWait(action, interval, true).then(() => {
            logger.warning('Was able to reach expected condition')
            count = 0
            return true
        }, () => {
            if(maxCount <= count) {
                logger.warning(`Wasn\'t able to reach expected condition. The last received value is "${action()}"`)
                count = 0
                return false
            } else {
                return this.forTrue(action, maxCount, interval)
            }
        })      
    }
    forFalse(action, maxCount, interval) {
        count++
        logger.info(`[${count}] Wait for false`)
        return doWait(action, interval, false).then(() => {
            logger.warning('Was able to reach expected condition')
            count = 0
            return false
        }, () => {
            if(maxCount <= count) {
                logger.warning(`Wasn\'t able to reach expected condition. The last received value is "${action()}"`)
                count = 0
                return true
            } else {
                return this.forFalse(action, maxCount, interval)
            }
        })      
    }
}

module.exports = Wait