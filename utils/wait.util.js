const logger = require('../utils/log.util');

const doWait = (action, interval, expectedValue) => {
    return new Promise((resolve, reject) => {
        const actionResult = action()
        if(actionResult === expectedValue) {
            setTimeout(() => resolve(), interval)
        }
        setTimeout(() => reject(actionResult), interval)
    })
}

const retrier = (action, expectedValue, maxCount, interval, count) => {  
    count++
    logger.info(`[${count}] Wait for ${expectedValue}`)
    return doWait(action, interval, expectedValue).then(() => {
        logger.warning('Was able to reach expected condition')
        return expectedValue
    }, (actionResult) => {
            if(maxCount <= count) {
                logger.warning(`Wasn\'t able to reach expected condition. The last received value is "${actionResult}"`)
                return !expectedValue
            } else {
                return retrier(action, expectedValue, maxCount, interval, count)
            }
    }) 
}

class Wait {
    forTrue(action, maxCount, interval) {
        return retrier(action, true, maxCount, interval, 0)    
    }
    forFalse(action, maxCount, interval) {
        return retrier(action, false, maxCount, interval, 0)    
    
    }
}

module.exports = Wait