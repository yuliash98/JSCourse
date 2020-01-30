const {eventFire} = require('./js/sendEvent');
const {inputText} = require('./js/inputText');

describe('Protractor Demo App', () => {
    
    const login = '***';
    const pass = '***';
    const username = element(by.id('login'));
    const password = element(by.id('password'));
    const logIn = element(by.css('.btn-primary'));
    const logOut = element(by.id('logout'));
    const pageHeader = element(by.css('.panel-heading h2'));
    const form = element(by.css('.ng-pristine'));

    beforeEach(() => {
        browser.get('http://reportingportal:8080/');
        browser.manage().window().maximize();
    })

    it('should have title', () => {
        expect(browser.getTitle()).toEqual('Aquality Tracking');
    });

    it('should log in only by js', () => {
        //username.sendKeys('y.shilkina');
        //password.sendKeys('aS2103yS0712');

        browser.executeScript(inputText, username, 'input', login);
        browser.executeScript(inputText, password, 'input', pass);
        
        logIn.click();
        //browser.executeScript(eventFire, form, 'submit');
        
        expect(pageHeader.getText()).toEqual('Select Project');
    });

    it('should log out', () => {
        logOut.click();
        //browser.executeScript(eventFire, logOut, 'submit');
        expect(username.isPresent()).toBe(true);
    });
  }); 