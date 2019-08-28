exports = module.exports = {
    onPrepare: function (...args) {
        const { browser } = require('protractor');

        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    },
};
