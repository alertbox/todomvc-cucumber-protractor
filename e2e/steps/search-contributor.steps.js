const { expect } = require('chai');;
const { Given, When, Then } = require('cucumber');
const { navigator, searchPane, searchSummaryPane } = require('../pages');

Given('the user visits GitHub', { timeout: 60 * 1000 }, async function () {
    return await navigator.gotoGitHub();
});

When('a contributor search for {string}', async function (name) {
    return await searchPane.query(name);
});

Then('the search result summary should have at least {int} contributor', async function (nrOfContributors) {
    const actualNrOfContributors = await searchSummaryPane.countUsers();
    return expect(actualNrOfContributors).to.be.at.least(nrOfContributors);
});
