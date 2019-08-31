const { expect } = require('chai');

async function shallSeeTodosOf(expectedTodos) {
    const actualTodos = await elements.all(by.css('view')).getText();
    return expect(expectedTodos.split(',')).to.have.all.members(actualTodos);
}

exports = module.exports = { shallSeeTodosOf };