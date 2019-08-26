const { browser, ExpectedConditions, element } = require('protractor');

const EC = ExpectedConditions;

module.exports = {
    resultsPaneElement: element(by.css('span[data-search-type="Users"]')),

    countUsers: async function () {
        const self = this;
        const presenceOf = EC.presenceOf(self.resultsPaneElement);
        const tobeClickable = EC.elementToBeClickable(self.resultsPaneElement);

        await browser.wait(EC.and(presenceOf, tobeClickable));
        const nrOfContributorsAsString = await self.resultsPaneElement.getText();

        return parseInt(nrOfContributorsAsString);
    },
};
