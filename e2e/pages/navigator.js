const { browser } = require('protractor');

exports = module.exports = {
    gotoGitHub: async function () { return await this.gotoPage(''); },
    gotoPage: async function(path) { return await browser.get(path); },
};
