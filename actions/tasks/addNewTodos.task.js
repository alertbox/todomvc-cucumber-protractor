const { element, by } = require('protractor');

const newtodoInput = element(by.model('newTodo'));
const todoForm = element(by.css('todo-form'));

async function addNewTodos(todos) {
    const newtodos = todos.split(',').map(addNewTodo);
    return $q.all(newtodos);
}

async function addNewTodo(todo) {
    await newtodoInput.sendKeys(todo.trim());
    return todoForm.submit();
}

exports = module.exports = { addNewTodos };