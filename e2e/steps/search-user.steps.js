const { expect } = require('chai');;
const { Given, When, Then } = require('cucumber');
const { navigator, searchPane, searchSummaryPane } = require('../pages');

Given('the user visits GitHub', { timeout: 60 * 1000 }, function () {
    return navigator.gotoGitHub();
});

When('a contributor name types and hit enter', function () {
    return searchPane.search();
});

Then('the search result summary should have at least 1 contributor', function () {
    return expect(searchSummaryPane.countUsers()).to.eventually.equal('1');
});
