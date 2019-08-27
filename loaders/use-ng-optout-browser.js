const { browser } = require('protractor');

module.exports = {
    use: function () {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    },
};