const { browser, ExpectedConditions, element, By } = require('protractor');
const EC = ExpectedConditions;

const SearchComponent = function () {
    const $self = this;

    const queryInputElement = element(By.css('.header-search-input'));
    const searchFormElement = element(By.css('.js-site-search-form'));

    $self.query = query;
    return $self;

    async function query (text) {
        await queryInputElement.sendKeys(text);
        await searchFormElement.submit();

        const queryString = 'q=' + text.replace(/\ /g, '+');
        return browser.wait(EC.urlContains(queryString));
    }
};

exports = module.exports = new SearchComponent();
