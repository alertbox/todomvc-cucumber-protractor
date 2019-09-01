const { When } = require('cucumber');
const { listOf } = require('../../actions/helpers/strings');
const { addNewTodos } = require('../../actions/tasks');

When('he adds {string} to the list', async function (todos) {
    return addNewTodos(listOf(todos));
});
