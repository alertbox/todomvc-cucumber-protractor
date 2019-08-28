const { browser, ExpectedConditions, element, By } = require('protractor');
const EC = ExpectedConditions;

const SearchSummaryComponent = function () {
    const $self = this;
    
    const resultsPaneElement = element.all(By.css('span[data-search-type="Users"]')).first();

    $self.countUsers = countUsers;
    return $self;

    async function countUsers () {
        const presenceOf = EC.presenceOf(resultsPaneElement);
        const tobeClickable = EC.elementToBeClickable(resultsPaneElement);

        await browser.wait(EC.and(presenceOf, tobeClickable));
        const nrOfContributorsAsString = await resultsPaneElement.getText();

        return parseInt(nrOfContributorsAsString);
    }
};

exports = module.exports = new SearchSummaryComponent();
