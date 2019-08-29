const { browser, ExpectedConditions, element, By } = require('protractor');
const EC = ExpectedConditions;

const queryInputElement = element(By.css('.header-search-input'));
const searchFormElement = element(By.css('.js-site-search-form'));

function sluggify(text) {
    return 'q=' + text.replace(/\ /g, '+');
}

async function query(text) {
    await queryInputElement.sendKeys(text);
    await searchFormElement.submit();

    const queryString = sluggify(text);
    return browser.wait(EC.urlContains(queryString));
}

exports = module.exports = { query };
