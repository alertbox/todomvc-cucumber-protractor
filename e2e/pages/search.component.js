const { browser, ExpectedConditions, element } = require('protractor');

const EC = ExpectedConditions;

module.exports = {
    queryInputElement: element(by.css('.header-search-input')),
    searchFormElement: element(by.css('.js-site-search-form')),

    query: async function (text) {
        const self = this;
        
        await self.queryInputElement.sendKeys(text);
        await self.searchFormElement.submit();
        
        const queryString = 'q=' + text.replace(/\ /g, '+');
        return await browser.wait(EC.urlContains(queryString));
    },
};