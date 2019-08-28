exports = module.exports = {
    config: {
        SELENIUM_PROMISE_MANAGER: false,
        directConnect: true,

        baseUrl: 'https://github.com',
        getPageTimeout: 60000, // Default 5000
        allScriptsTimeout: 60000,

        framework: 'custom',
        frameworkPath: require.resolve('protractor-cucumber-framework'),

        specs: ['../e2e/**/*.feature',],

        restartBrowserBetweenTests: false,
        ignoreUncaughtExceptions: true,

        cucumberOpts: {
            requireModule: [],
            require: ['../e2e/**/*.js',],
            format: 'json:./.temp/results.json',
            tags: [],
            strict: true,
            dryRun: false,
            compiler: [],
        },

        capabilities: {
            browserName: 'chrome',
            shardTestFiles: true,
            chromeOptions: {},
        },

        plugins: [
            { path: '../plugins/use-chai-as-promised.js', }, 
            { path: '../plugins/use-ng-optout-browser.js', },
        ],

        beforeLaunch: function () {},

        onPrepare: function () {},

        onCleanUp: function () {},

        onComplete: function () {},
    }
};
