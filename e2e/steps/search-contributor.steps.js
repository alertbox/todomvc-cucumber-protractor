const { expect } = require('chai');;
const { Given, When, Then } = require('cucumber');
const { navigator, searchPane, searchSummaryPane } = require('../pages');

Given('the user visits GitHub', { timeout: 60 * 1000 }, async function () {
    return await navigator.gotoGitHub();
});

When('the user search for a {string}', async function (name) {
    return await searchPane.query(name);
});

Then('the result summary should at least find {int} contributor', async function (nrOfContributors) {
    const actualNrOfContributors = await searchSummaryPane.countUsers();
    return expect(actualNrOfContributors).to.be.at.least(nrOfContributors);
});
