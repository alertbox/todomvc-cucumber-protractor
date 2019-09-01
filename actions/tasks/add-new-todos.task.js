const { element, By, promise } = require('protractor');

const newtodoInput = element(By.css('.new-todo'));

async function addNewTodos(todos) {
    const todoFns = todos.map(addNewTodo);
    return promise.all(todoFns);
}

async function addNewTodo(todo) {
    return newtodoInput.sendKeys(todo + '\n');
}

exports = module.exports = { 
    addNewTodos, 
    addNewTodo 
};