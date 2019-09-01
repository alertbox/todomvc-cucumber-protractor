const { addNewTodo, addNewTodos } = require('./addNewTodos.task');
const { trashTodoList } = require('./trashTodoList.task');
const { visitHomepage, visitHashActive, visitHashCompleted } = require('./visitPage.task');

exports = module.exports = {
    addNewTodo, 
    addNewTodos,
    trashTodoList,
    visitHomepage,
    visitHashActive,
    visitHashCompleted
};