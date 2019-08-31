function NgOptoutBrowserPlugin() {}
NgOptoutBrowserPlugin.prototype.onPrepare = function () {
    const { browser, } = require('protractor');
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
};

exports = module.exports = new NgOptoutBrowserPlugin();
