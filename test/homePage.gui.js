const assert = require('chai').assert;
const data = require('../data/test.data').homePage;
const locator = require('../data/locator').homePage;
//const viewport = require('../data/viewport');

//for(let i in viewport){

describe(`Main Page`, function () {
    it('Page Title correctness', function () {
        this.timeout(20000);
        browser.url('/');
        let title = browser.getTitle();
        assert.equal(title, data.pageTitle, 'Title is incorrect');
    });

    it(`Global Header is Visible`, function () {

        let headerVisible = browser.isVisibleWithinViewport(locator.header);
        assert.isTrue(headerVisible, 'Global Header is NOT Visible');

    });

    it('Favicon has the correct link', function () {

        //browser.waitForVisible(locator.navigation, 10000);

        let favicon = browser.getAttribute(locator.favicon, 'href');
        assert.equal(favicon, data.faviconLink, 'Favicon does NOT Exist');
    });


    it('Navigation menu has Visible style', function () {
        let isNavigationVisible = browser.isVisible(locator.navigation);
        assert.isTrue(isNavigationVisible, 'Navigation is NOT Visible');
    });

    for (let i in locator.navItems) {

        it(`Navigation menu item: ${i} is visible within the Viewport`, function () {
            let itemVisible = browser.isVisibleWithinViewport(locator.navItems[i]);
            assert.isTrue(itemVisible, `Navigation menu item ${i} is NOT Visible`);
        });

        it(`Navigation menu item: ${i} name correctness`, function () {
            let currentNames = browser.getText(locator.navItems[i]);
            assert.equal(currentNames, data.menu[i], `Navigation item name ${i} is NOT correct`);
        });
    }

    it('Navigation Sub menu has Visible style', function () {
        browser.moveToObject(locator.navItems[0]);
        browser.waitForVisible('#menu-item-806');
        let text = browser.getText('#menu-item-806>a');
        assert.equal(text, data.subMenu[0], `Navigation Sub menu item with locator ${locator.navItems[0]} is NOT Visible`);
    });

    it('"Our SERVICE" button is visible', function () {
        let isSrvBtnVisible = browser.isVisible(locator.button1);
        assert.isTrue(isSrvBtnVisible, '"Our SERVICE" button is NOT Visible');
    });
    it('"WATCH VIDEO" button is visible', function () {
        let isWtchBtnVisible = !browser.waitForVisible(locator.button2);
        //assert.isTrue(isWtchBtnVisible, '"WATCH VIDEO" button is NOT Visible');
    });

    it(`should wait for checkbox to be removed`, () => {
        browser.url(`https://the-internet.herokuapp.com/dynamic_controls`);

        $(`#checkbox-example button`).click();

        browser.waitUntil(() => {
            return !$(`#checkbox-example`).isExisting();
        });
    });

        // it('Checking if the video has the correct src', function () {
        //     browser.newWindow(data.videoFrame);
        //     let url = browser.getAttribute('iframe','src');
        //     assert.equal(url, data.videoSrc, 'Video resource is wrong');
        // });

        // it('switch 2', function () {
        //     browser.waitForExist('iframe');
        //     //var my_frame = $('iframe').value;
        //
        //     browser.frame(0); // this line is important to switch to the iframe
        //     let button = $$('polygon.fill')[0];
        //     button.click();
        //     //browser.switchTab('http://webdriver.io/api/window/switchTab.html#Usage');
        //
        //     assert.isTrue(true);
        // });

        // it('Global Footer Visible', function () {
        //     let footerVisible = browser.isVisible(locator.footer);
        //     assert.isTrue(footerVisible, 'Global Footer NOT Visible');
        // });

    });

//}