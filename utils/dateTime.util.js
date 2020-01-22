class DateTimeUtil {
    today() {
        var date = new Date();

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yyyy = date.getFullYear();

        return dd + '.' + mm + '.' + yyyy;
    }
    setYear(date, year) {
        date.setYear(year);
        return date;
    }
    daysDifference(dateLeft, dateRight) {
        return (dateRight - dateLeft)/(3600 * 24 * 1000);
    }
 
}

module.exports = new DateTimeUtil();
