const { element, By, Key, promise, } = require('protractor');

const newtodoInput = element(By.css('.new-todo'));

async function addNewTodos(todos) {
    const todoFns = todos.split(', ').map(addNewTodo);
    return promise.all(todoFns);
}

async function addNewTodo(todo) {
    return await newtodoInput.sendKeys(todo.trim() + '\n');
}

exports = module.exports = { addNewTodos, addNewTodo, };