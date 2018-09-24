const assert = require('chai').assert;
const locator = require('../data/locator').loginPage;
const data = require('../data/test.data').loginPageFunctionality;

describe('Login Functionality', function () {

    describe('Email Field', function () {

        it(`User can enter ${data.minLength} symbol${data.minLength > 1 ? 's' : ''}`, function () {
            browser.url('/');
            browser.waitForVisible(locator.email,7000);
            browser.setValue(locator.email,'1'.repeat(data.minLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.minLength);
        });

        it(`User can enter ${data.midLength} symbols`, function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'a'.repeat(data.midLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.midLength);
        });

        it(`User can enter ${data.maxLength} symbols`, function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'n'.repeat(data.maxLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.maxLength);
        });

        it(`User can\'t enter ${data.maxLength + 1} symbols`, function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'x'.repeat(data.maxLength + 1));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.maxLength);
        });

        it('Empty email field should cause error message', function () {
            browser.clearElement(locator.email);
            browser.click(locator.loginButton);
            browser.waitForVisible(locator.errorMessage,7000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, data.noLoginOrPassError);
        });

        it('Unregistered email should cause error message', function () {
            browser.url('/');
            browser.waitForVisible(locator.email,7000);
            browser.setValue(locator.email,'a@nn.a');
            browser.setValue(locator.password,'1');
            browser.click(locator.loginButton);
            browser.waitForText(locator.errorMessage, 1000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, data.wrongLoginError);
        });
    });
      describe('Password Field', function () {

            it('User can enter 1 any symbol', function () {

                browser.setValue(locator.password,'9');
                let input = browser.getValue(locator.password);
                assert.equal(input, '9');
            });

            it('User can enter 22 symbols', function () {
                browser.clearElement(locator.password);
                browser.setValue(locator.password,'9'.repeat(45));
                let input = browser.getValue(locator.password);
                assert.equal(input,'9'.repeat(45));
            });

            it('User can enter 45 symbols', function () {
                browser.clearElement(locator.password);
                browser.setValue(locator.password,'A'.repeat(23));
                let input = browser.getValue(locator.password);
                assert.equal(input, 'A'.repeat(23));
            });

            it('User can\'t enter 46 symbols', function () {
                browser.clearElement(locator.password);
                browser.setValue(locator.password,'Z'.repeat(46));
                let input = browser.getValue(locator.password);
                assert.equal(input.length, 45);
            });

           it('Empty password field should cause error message', function () {
                  browser.refresh();
                  browser.pause(2000);

                  browser.click(locator.loginButton);
                  //browser.pause(5000);
                  browser.waitForText(locator.errorMessage, 2000);;
                  let error = browser.getText(locator.errorMessage);
                  //browser.pause(5000);
                  assert.equal(error,'Specify email and password', 'мое сообщение');
            });

            it('Registered but not matching password should cause error message', function () {
                browser.clearElement(locator.email);
                browser.setValue(locator.email,'ipvola@gmail.com');
                browser.setValue(locator.password,'1');
                browser.click(locator.loginButton);
                browser.pause(1000);
                let error = browser.getText(locator.errorMessage);
                assert.equal(error, 'Password is incorrect');
            });
            it('All symbols in password field are replaced by bullet', function () {
                            let type=browser.getAttribute(locator.password,'type');
                            assert.equal(type, 'password');
                        });
        });
});