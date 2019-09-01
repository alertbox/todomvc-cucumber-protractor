const { browser } = require('protractor');

function visitHomepage() {
    return visitPage('#');
}

function visitHashActive() {
    return visitPage('#/active');
}

function visitHashCompleted() {
    return visitPage('#/completed');
}

function visitPage(hash) {
    const path = browser.baseUrl + '/' + hash + '/';
    return browser.driver.get(path);
}

exports = module.exports = { 
    visitHomepage, 
    visitHashActive, 
    visitHashCompleted 
};