const logger = require('../utils/log.util');

const doWait = (action, interval, expectedValue) => {
    return new Promise((resolve, reject) => {
        if(action() === expectedValue) {
            setTimeout(() => resolve(), interval)
        }
        setTimeout(() => {
            reject()
            return action()
        }, interval)
    })
}

var count = 0

const retrier = (expectedValue) => {  
    count++
    logger.info(`[${count}] Wait for ${expectedValue}`)
    return count
}

const reached = (expectedValue) => {  
    logger.warning('Was able to reach expected condition')
    count = 0
    return expectedValue
}

const notReached = (expectedValue, action) => {  
    logger.warning(`Wasn\'t able to reach expected condition. The last received value is "${action()}"`)
    count = 0
    return expectedValue
}

class Wait {
    forTrue(action, maxCount, interval) {
        count = retrier(true)
        return doWait(action, interval, true).then(() => {return reached(true)},
         () => {
            if(maxCount <= count) {
                return notReached(false, action)
            } else {
                return this.forTrue(action, maxCount, interval)
            }
        })      
    }
    forFalse(action, maxCount, interval) {
        count = retrier(false)
        return doWait(action, interval, false).then(() => {return reached(false)}, () => {
            if(maxCount <= count) {
                return notReached(true, action)
            } else {
                return this.forFalse(action, maxCount, interval)
            }
        })      
    }
}

module.exports = Wait