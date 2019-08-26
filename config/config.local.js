require('../loaders/use-chai-as-promised');
require('../loaders/use-extended-timeout');

module.exports = {
    config: {
        SELENIUM_PROMISE_MANAGER: false,
        directConnect: true,

        baseUrl: 'https://github.com',
        getPageTimeout: 60000, // Default 30000
        allScriptsTimeout: 60000,

        framework: 'custom',
        frameworkPath: require.resolve('protractor-cucumber-framework'),

        specs: [
            '../e2e/**/*.feature',
        ],

        restartBrowserBetweenTests: false,
        ignoreUncaughtExceptions: true,

        cucumberOpts: {
            require: [
                '../e2e/**/*.steps.js',
            ],
            format: 'json:./.temp/results.json',
            tags: [],
            strict: true,
            dryRun: false,
            compiler: [],
        },

        capabilities: {
            browserName: 'chrome',
            shardTestFiles: true,
        },

        plugins: [],

        onPrepare: function () {
            require('../loaders/use-ng-opt-out-browser');
        },

        onCleanUp: function () {},

        onComplete: function () {},
    }
};
