const { expect } = require('chai');
const { element, By } = require('protractor');

const nrofTodosElement = element(By.css('.todo-count'));

async function shallSeeTodosCountOf(nrOfTodos) {
    const actualNrOfTodos = await nrofTodosElement.getText();
    
    return expect(parseInt(actualNrOfTodos, 10)).to.be.at.least(nrOfTodos);
}

exports = module.exports = { shallSeeTodosCountOf };