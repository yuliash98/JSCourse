const formater = require('../../helpers/formateDate');
const {assert} = require('chai');
const chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);

class Exchange {
    getRate(service, day, currency, base) {
        chai
        .request(service)
        .get(`${formater.formateDate(new Date(day))}?symbols=${currency}&base=${base}`)
        .end((err, res) => {
            assert.isNull(err, `There is an error: ${err}`);
            let response = JSON.parse(res.text);
            console.log(`[${response.date}] 1 USD = ${response.rates.RUB} RUBs`);
       });
    }
}

module.exports = new Exchange();
