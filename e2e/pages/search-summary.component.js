const { browser, ExpectedConditions, element } = require('protractor');

const EC = ExpectedConditions;

module.exports = {
    resultsPaneElement: element(by.css('span[data-search-type="Users"]')),

    countUsers: function () {
        const self = this;
        const presenceOf = EC.presenceOf(self.resultsPaneElement);
        const tobeClickable = EC.elementToBeClickable(self.resultsPaneElement);

        return browser.wait(EC.and(presenceOf, tobeClickable))
            .then(function () {
                return self.resultsPaneElement.getText();
            });
    },
};
