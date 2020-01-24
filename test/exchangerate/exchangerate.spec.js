const {describe, it} = require('mocha');
const exchange = require('../../pages/exchangerate/index');
const date = require('../../utils/dateTime.util');

const service = "https://api.exchangeratesapi.io/";

describe('ExchangeRate TestSuite', () => {
    it('should write USD rates in RUBs for the last 10 days', () => {
        let currency = 'RUB';
        let base = 'USD';
        let difference = 3600 * 24 * 1000;
        let day = date.tenDaysAgo();
        for (let i = 1; i < 10; i++) {            
            exchange.getRate(service, day, currency, base);
            day += difference;
        }
    });
});


