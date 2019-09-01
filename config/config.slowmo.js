exports = module.exports = {
    config: {
        SELENIUM_PROMISE_MANAGER: false,    // Using native async/await
        directConnect: false,               // Using Selenium Server
        blockingProxy: true,                // Experimenting SlowMo
        highlightDelay: 3000,               // In Milliseconds

        baseUrl: 'http://todomvc.com/examples/vanillajs',
        getPageTimeout: 60000,              // In Milliseconds, Default 5000
        allScriptsTimeout: 60000,           // In Milliseconds

        framework: 'custom',
        frameworkPath: require.resolve('protractor-cucumber-framework'),

        specs: ['../features/**/*.feature', ],

        restartBrowserBetweenTests: false,
        ignoreUncaughtExceptions: true,

        cucumberOpts: {
            requireModule: [],
            require: ['../steps/**/*.js', ],
            format: 'json:./.temp/results.json',
            tags: ['(@sanity or @fast) and ~@skip', ],
            strict: true,
            dryRun: false,
            compiler: [],
            order: 'defined'
        },

        capabilities: {
            browserName: 'chrome',
            shardTestFiles: true
        },

        plugins: [
            { path: '../plugins/chai-as-promised.plugin.js' }, 
            { path: '../plugins/ng-optout-browser.plugin.js' },
        ],

        beforeLaunch: function () {},

        onPrepare: function () {},

        onCleanUp: function () {},

        onComplete: function () {}
    },
};
