const { browser } = require('protractor');

module.exports = {
    gotoGitHub: async function () { return await browser.get(''); },
};
