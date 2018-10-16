const assert = require('chai').assert;
const data = require('../data/test.data');
const locator = require('../data/locator');
const controlBarData = require('../data/test.data').bugReportPageControlBar;
const controlBarLocator = require('../data/locator').controlBarFunctionality;

describe('Created Bug Report Page Control Bar', function () {

    describe('Edit Mode', function () {

        before(function () {
            browser.url('/');
            browser.waitForVisible(locator.loginPage.email, 2000);
            browser.setValue(locator.loginPage.email, data.user.email);
            browser.setValue(locator.loginPage.password, data.user.password);
            browser.click(locator.loginPage.loginButton);
            browser.waitForVisible(locator.bugReportEditMode.allIssuesBtn, 2000);
            browser.click(locator.bugReportEditMode.allIssuesBtn);
            browser.waitForExist(locator.newBugReportPage.summaryField);
            browser.click(locator.newBugReportPage.summaryField);
            browser.click(controlBarLocator.editBtn);
        });

        describe('Active cancel button', function () {

            it(`background color is ${controlBarData.cancelBtnBackgroundColor}`, function () {
                const backgroundColor = browser.getCssProperty(controlBarLocator.cancelBtnEdit, 'background-color').parsed.hex;
                assert.equal(backgroundColor, controlBarData.cancelBtnBackgroundColor, 'Cancel button background color is incorrect');
            });

            it(`font family is ${controlBarData.btnFontFamily}`, function () {
                const fontFamily = browser.getCssProperty(controlBarLocator.cancelBtnEdit, 'font-family').value;
                assert.equal(fontFamily, controlBarData.btnFontFamily, 'Cancel button font family is incorrect');
            });

            it(`font size is ${controlBarData.btnFontSize}`, function () {
                const fontSize = browser.getCssProperty(controlBarLocator.cancelBtnEdit, 'font-size').value;
                assert.equal(fontSize, controlBarData.btnFontSize, 'Cancel button font size is incorrect');
            });

            it(`font weight is ${controlBarData.btnFontWeight}`, function () {
                const fontWeight = browser.getCssProperty(controlBarLocator.cancelBtnEdit, 'font-weight').value;
                assert.equal(fontWeight, controlBarData.btnFontWeight, 'Cancel button font weight is incorrect');
            });

            it(`font color is ${controlBarData.btnFontColor}`, function () {
                const fontColor = browser.getCssProperty(controlBarLocator.cancelBtnEdit, 'color').parsed.hex;
                assert.equal(fontColor, controlBarData.btnFontColor, 'Cancel button color is incorrect');
            });

            it(`text is aligned to the ${controlBarData.btnTextAlign}`, function () {
                const align = browser.getCssProperty(controlBarLocator.cancelBtnEdit, 'text-align').value;
                assert.equal(align, controlBarData.btnTextAlign, `Cancel button text is not aligned to the ${controlBarData.btnTextAlign}`);
            });

            it(`hover background color is ${controlBarData.cancelBtnHoverBackgroundColor}`, function () {
                browser.moveToObject(controlBarLocator.cancelBtnEdit);
                browser.pause(2000);
                const hoverBackgroundColor = browser.getCssProperty(controlBarLocator.cancelBtnEdit, 'background-color').parsed.hex;
                assert.equal(hoverBackgroundColor, controlBarData.cancelBtnHoverBackgroundColor, 'Cancel button hover background color is incorrect');
            });

            it('is active', function () {
                const isEnabled = browser.isEnabled(controlBarLocator.cancelBtnEdit);
                assert.isTrue(isEnabled, 'Cancel button is not active');
            });
        })
    })
});