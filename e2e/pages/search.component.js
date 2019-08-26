const { browser, ExpectedConditions, element } = require('protractor');

const EC = ExpectedConditions;

module.exports = {
    queryInputElement: element(by.css('.header-search-input')),
    searchFormElement: element(by.css('.js-site-search-form')),

    search: function () {
        const self = this;

        return self.queryInputElement.sendKeys('kosalanuwan')
            .then(function () { return self.searchFormElement.submit(); })
            .then(function () { return browser.wait(EC.urlContains('q=kosalanuwan')); });
    },
};