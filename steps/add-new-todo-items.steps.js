const { Given, When, Then, } = require('cucumber');
const { visitHomepage, addNewTodos, } = require('../actions/tasks');
const { shallSeeTodosOf, } = require('../actions/questions');

Given('that KP already has a list of things to do such as {string}', { timeout: 60 * 1000 }, async function (todos) {
    await visitHomepage();
    return addNewTodos(todos);
});

When('he adds {string} to the list', async function (todos) {
    return await addNewTodos(todos);
});

Then('he shall see both {string} and {string} in the todo list', async function (oldTodos, newTodos) {
    return shallSeeTodosOf(oldTodos + ', ' + newTodos);
});
