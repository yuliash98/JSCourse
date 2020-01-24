class DateTimeUtil {
    today() {
        return new Date();
    }
    setYear(date, year) {
        date.setYear(year);
        return date;
    }
    daysDifference(dateLeft, dateRight) {
        return (dateRight - dateLeft)/(3600 * 24 * 1000);
    }
    tenDaysAgo() {
        return new Date() - 10 * 3600 * 24 * 1000;
    }
}

module.exports = new DateTimeUtil();
