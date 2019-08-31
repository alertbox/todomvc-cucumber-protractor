const { expect, } = require('chai');
const { element, By } = require('protractor');

const nrofTodosElement = element(By.css('.todo-count'));

async function shallSeeTodosCountOf(nrOfTodos) {
    const actualNrOfTodos = await nrofTodosElement.getText();
    
    return expect(nrOfTodos).to.be.equal(parseInt(actualNrOfTodos, 10));
}

exports = module.exports = { shallSeeTodosCountOf, };