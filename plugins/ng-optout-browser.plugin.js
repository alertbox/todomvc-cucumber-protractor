const NgOptoutBrowserPlugin = function () {
    const $self = this;

    $self.onPrepare = onPrepare;
    return $self;

    function onPrepare (...args) {
        const { browser } = require('protractor');
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    }
};

exports = module.exports = new NgOptoutBrowserPlugin();

// exports = module.exports = {
//     onPrepare: function (...args) {
//         const { browser } = require('protractor');

//         browser.ignoreSynchronization = true;
//         browser.waitForAngularEnabled(false);
//         browser.manage().window().maximize();
//     },
// };
