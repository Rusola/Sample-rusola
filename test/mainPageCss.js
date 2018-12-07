const assert = require('chai').assert;
const data = require('../data/test.data').loginPage;
const locator = require('../data/locator');

describe('"OUR SERVICE" button', function () {

    it('"Our SERVICE" button is visible', function () {
        browser.url('/');
        browser.waitForVisible(locator.loginButton);
        let loginButton = browser.isVisible(locator.loginButton);
        assert.isTrue(loginButton, 'Login button is NOT Visible');
    });

    it('Login button alignment', function () {
       let loginButtonAlign = browser.getCssProperty(locator.loginButton,"vertical-align").value;
       console.log(loginButtonAlign);
        assert.equal(loginButtonAlign, "middle", 'Login Button align is NOT correct');
    });

    it('Login button Font Size', function () {
        let fontSize = browser.getCssProperty(locator.loginButton, 'font-size').value;
        assert.equal(fontSize, data.loginButtonFontSize, 'Login Button Font Size is NOT correct');
    });

    it('Login button Font Weight', function () {
        let fontWeight = browser.getCssProperty(locator.loginButton, 'font-weight').value;
        assert.equal(fontWeight, data.loginButtonFontWeight, 'Login Button Font Weight is NOT correct');
    });

    it('Login button Font Family', function () {
        let fontFamily = browser.getCssProperty(locator.loginButton, 'font-family').value;
        assert.equal(fontFamily, data.loginButtonFontFamily, 'Login Button Font Family is NOT correct');
    });

    it('Login button Font Color', function () {
        let fontColor = browser.getCssProperty(locator.loginButton, 'color').parsed.hex;
        assert.equal(fontColor, data.loginButtonFontColor, 'Login Button Font Color is NOT correct');
    });

    it('Login button Color', function () {
        let Color = browser.getCssProperty(locator.loginButton, 'background-color').parsed.hex;
        assert.equal(Color, data.loginButtonColor, 'Login Button Color is NOT correct');
    });

    it('Login button Hover Color', function () {
        browser.moveToObject(locator.loginButton);
        browser.pause(3000);
        let HoverColor = browser.getCssProperty(locator.loginButton, 'background-color').parsed.hex;
        assert.equal(HoverColor, data.loginButtonFocusColor, 'Login Button Hover Color is NOT correct');
    });

    
});

describe('Elements present', function () {

    it('Email field is visible', function () {
        browser.url('/');
        browser.waitForVisible(locator.email);
        let emailField = browser.isVisible(locator.email);
        assert.isTrue(emailField, 'Email field is NOT Visible');
    });

    it('Password field is visible', function () {
        let passwordField = browser.isVisible(locator.password);
        assert.isTrue(passwordField, 'Password field is NOT Visible');
    });

    it('"*Required field” text is visible', function () {
        let requiredText = browser.isVisible(locator.requiredText);
        assert.isTrue(requiredText, '"*Required field" text is NOT Visible');
    });

    it('Login button is visible', function () {
        let loginButton = browser.isVisible(locator.loginButton);
        assert.isTrue(loginButton, 'Login button is NOT Visible');
    });

    it('Registration button is visible', function () {
        let registrationButton = browser.isVisible(locator.registrationButton);
        assert.isTrue(registrationButton, 'Registration button is NOT Visible');
    });
});

describe('Email field', function () {

    it('Email field should be empty', function () {
        let emailFieldValue = browser.getValue(locator.email);
        assert.equal(emailFieldValue, '', 'Email field is NOT empty');
    });

    it('Email placeholder should be "Email *"', function () {
        let emailFieldPlaceholder = browser.getAttribute(locator.email, 'placeholder');
        assert.equal(emailFieldPlaceholder, data.emailPlaceholderText, 'Email field placeholder is NOT correct');
    });
    it('Email field Font Size', function () {
        let fontSize = browser.getCssProperty(locator.email, 'font-size').value;
        assert.equal(fontSize, data.emailFieldFontSize, 'Email field Font Size is NOT correct');
    });

    it('Email field Font Weight', function () {
        let fontWeight = browser.getCssProperty(locator.email, 'font-weight').value;
        assert.equal(fontWeight, data.emailFieldFontWeight, 'Email field Font Weight is NOT correct');
    });

    it('Email field Font Family', function () {
        let fontFamily = browser.getCssProperty(locator.email, 'font-family').value;
        assert.equal(fontFamily, data.emailFieldFontFamily, 'Email field Font Family is NOT correct');
    });

    it('Email field Font Color', function () {
        let fontColor = browser.getCssProperty(locator.email, 'color').parsed.hex;
        assert.equal(fontColor, data.emailFieldFontColor, 'Email field Font Color is NOT correct');
    });
});