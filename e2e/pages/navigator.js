const { browser } = require('protractor');

function gotoGitHub() {
    return browser.get('');
}

exports = module.exports = { gotoGitHub };
