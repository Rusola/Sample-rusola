const assert = require('chai').assert;
const data = require('../data/test.data');
const locator = require('../data/locator');

describe('Created Bug Report Page Control Bar', function () {
    describe('Active cancel button', function () {
        it(`font family is ${data.bugReportPageControlBar.btnFontFamily}`, function () {
            function goToBugReportPage() {
                browser.url('/');
                browser.waitForVisible(locator.loginPage.email, 2000);
                browser.setValue(locator.loginPage.email, data.user.email);
                browser.setValue(locator.loginPage.password, data.user.password);
                browser.click(locator.loginPage.loginButton);
                browser.waitForVisible(locator.bugReportEditMode.allIssuesBtn, 2000);
                browser.click(locator.bugReportEditMode.allIssuesBtn);

                browser.waitForExist(locator.newBugReportPage.summaryField);
                browser.click(locator.newBugReportPage.summaryField);

                // browser.waitForExist('#summary');
                // $$('#summary')[0].click();
                //browser.waitForExist(locator.controlBarFunctionality.bugReportFormDisabled, 2000);
            }

            function switchToEditMode() {
                //$(locator.controlBarFunctionality.editBtn).click();
                browser.click(locator.controlBarFunctionality.editBtn);
                //browser.waitForVisible(locator.controlBarFunctionality.bugReportFormEdit, 2000);

                //browser.waitForVisible(locator.bugReportFormDisabledState.btn, 2000);
            }

            goToBugReportPage();
            switchToEditMode();
            let fontFamily = browser.getCssProperty(locator.controlBarFunctionality.cancelBtnEdit, 'font-family').value;
            assert.equal(fontFamily, data.bugReportPageControlBar.btnFontFamily, 'Cancel button font family is incorrect');
        });

        it(`font size is ${data.bugReportPageControlBar.btnFontSize}`, function () {
            let fontSize = browser.getCssProperty(locator.controlBarFunctionality.cancelBtnEdit, 'font-size').value;
            assert.equal(fontSize, data.bugReportPageControlBar.btnFontSize, 'Cancel button font size is incorrect');
        });

        it(`font weight is ${data.bugReportPageControlBar.btnFontWeight}`, function () {
            let fontWeight = browser.getCssProperty(locator.controlBarFunctionality.cancelBtnEdit, 'font-weight').value;
            assert.equal(fontWeight, data.bugReportPageControlBar.btnFontWeight, 'Cancel button font weight is incorrect');
        });

        it(`font color is ${data.bugReportPageControlBar.btnFontColor}`, function () {
            let fontColor = browser.getCssProperty(locator.controlBarFunctionality.cancelBtnEdit, 'color').parsed.hex;
            assert.equal(fontColor, data.bugReportPageControlBar.btnFontColor, 'Cancel button color is incorrect');
        });

        it(`text is aligned to the ${data.bugReportPageControlBar.btnTextAlign}`, function () {
            let align = browser.getCssProperty(locator.controlBarFunctionality.cancelBtnEdit, 'text-align').value;
            assert.equal(align, data.bugReportPageControlBar.btnTextAlign, 'Cancel button text is not aligned to the ${data.bugReportPageControlBar.btnTextAlign}');
        });
    })
});