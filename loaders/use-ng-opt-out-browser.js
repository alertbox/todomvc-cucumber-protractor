const { browser } = require('protractor');
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false);
browser.manage().window().maximize();
