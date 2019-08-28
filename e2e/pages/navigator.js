const { browser } = require('protractor');

const Navigator = function () {
    const $self = this;

    $self.gotoGitHub = gotoGitHub;
    return $self;

    function gotoGitHub () {
        return browser.get('');
    }
};

exports = module.exports = new Navigator();
