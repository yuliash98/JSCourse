const {describe, it} = require('mocha');
const {assert} = require('chai');
const date = require('../utils/dateTime.util.js');
const formater = require('../helpers/formateDate');

describe('DateTimeUtil TestSuite', () => {
    it('checks that func today() returns today date', () => {
        var todayDate = '2020-01-24';
        assert.equal(formater.formateDate(date.today()), todayDate, 'Func didn\'t return today date');
    });
    it('checks that func setYear() returns correct result', () => {
        var d = new Date(2020, 0, 1);
        var newYear = 2018;
        assert.equal(date.setYear(d, newYear).getFullYear(), newYear, 'Func didn\'t return date with new year');
    });
    it('checks that func daysDifference() returns correct result', () => {
        var d1 = new Date(2020, 0, 1);
        var d2 = new Date(2020, 0, 5);
        assert.equal(date.daysDifference(d1, d2), 4, 'Func didn\'t return days difference');
    });
});