const { expect } = require('chai');
const { element, By } = require('protractor');

const todoElements = element.all(By.css('.view'));

async function shallSeeTodosOf(todos) {
    const actualTodos = await todoElements.getText();
    
    return expect(actualTodos).to.have.all.members(todos);
}

exports = module.exports = { shallSeeTodosOf };