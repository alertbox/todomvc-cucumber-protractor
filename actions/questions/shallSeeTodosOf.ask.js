const { expect, } = require('chai');
const { element, By } = require('protractor');

const todoElements = element.all(By.css('.view'));

async function shallSeeTodosOf(todos) {
    const expectedTodos = todos.split(', ');
    const actualTodos = await todoElements.getText();
    
    return expect(expectedTodos).to.have.all.members(actualTodos);
}

exports = module.exports = { shallSeeTodosOf, };