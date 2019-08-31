// const { context } = require('../../support/scope');
const { browser } = require('protractor');

async function visitHomepage() {
    return await browser.get('');
}

exports = module.exports = { visitHomepage, };