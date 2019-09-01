const { When } = require('cucumber');
const { visitHomepage, visitHashActive } = require('../../actions/tasks');

When('he looks at pending things to do', async function () {
    return visitHashActive();
});

When('he looks at all things to do', async function () {
    return visitHomepage();
});
