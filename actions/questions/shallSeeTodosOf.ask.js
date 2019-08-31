const { expect, } = require('chai');
const { element, By } = require('protractor');

async function shallSeeTodosOf(todos) {
    const expectedTodos = todos.split(', ');
    const actualTodos = await element.all(By.css('.view')).getText();
    
    return expect(expectedTodos).to.have.all.members(actualTodos);
}

exports = module.exports = { shallSeeTodosOf, };