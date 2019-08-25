const Config = {
    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: 'https://github.com',
    allScriptsTimeout: 30000,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../e2e/**/*.feature'
    ],

    restartBrowserBetweenTests: true,
    ignoreUncaughtExceptions: true,

    cucumberOpts: {
        require: [
            './e2e/**/*.steps.js',
            './e2e/**/*.component.js',
            './hooks/*.hook.js',
            './support/**/*.js'
        ],
        format: 'json:./.temp/results.json',
        tags: [],
        strict: true,
        'dry-run': false
    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true
    },

    plugins: [],

    onPrepare: function () {
        const chai = require('chai');
        chai.should();
        const chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);

        const { browser } = require('protractor');
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    },

    onCleanUp: function () {},

    onComplete: function () {}
};

module.exports = module = { config: Config };
