exports = module.exports = {
    config: {
        SELENIUM_PROMISE_MANAGER: false,    // Using native async/await
        directConnect: true,                // Bypass Selenium Server

        baseUrl: 'http://todomvc.com/examples/vanillajs/',
        getPageTimeout: 60000,              // Default 5000
        allScriptsTimeout: 60000,

        framework: 'custom',
        frameworkPath: require.resolve('protractor-cucumber-framework'),

        specs: ['../e2e/**/*.feature', ],

        restartBrowserBetweenTests: false,
        ignoreUncaughtExceptions: true,

        cucumberOpts: {
            requireModule: [],
            require: ['../e2e/**/*.js', ],
            format: 'json:./.temp/results.json',
            tags: ['@sanity or @fast'],
            strict: true,
            dryRun: false,
            compiler: [],
        },

        capabilities: {
            browserName: 'chrome',
            shardTestFiles: true,
            directConnect: true,
            // chromeOptions: {
            //     useAutomationExtension: false,
            //     args: ['--headless', '--disable-gpu', '--window-size=1280,1024', ],
            // },
        },

        plugins: [
            { path: '../plugins/chai-as-promised.plugin.js', }, 
            { path: '../plugins/ng-optout-browser.plugin.js', },
        ],

        beforeLaunch: function () {},

        onPrepare: function () {},

        onCleanUp: function () {},

        onComplete: function () {},
    }
};
