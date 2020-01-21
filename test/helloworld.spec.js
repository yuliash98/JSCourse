const {describe, it} = require('mocha');
const {assert, expect} = require('chai');  
const logger = require('../utils/log.util');
const date = require('../utils/dateTime.util.js');

describe('Hello World TestSuite', () => {
    it('should write "Hello World"', () => {
        logger.info('Hello World');
    })
})

describe('DateTimeUtil TestSuite', () => {
    it('should write today Date', () => {
        logger.info(date.today())
    })
})