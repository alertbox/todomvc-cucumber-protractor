const { browser, } = require('protractor');

function visitHomepage() {
    return visitPage();
}

function visitPage(path = browser.baseUrl) {
    return browser.driver.get(path);
}

exports = module.exports = { visitHomepage, visitPage, };