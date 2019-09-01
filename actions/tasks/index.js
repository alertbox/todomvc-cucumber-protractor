const { addNewTodo, addNewTodos } = require('./add-new-todos.task');
const { trashTodoList } = require('./trash-todo-list.task');
const { visitHomepage, visitHashActive, visitHashCompleted } = require('./visit-page.task');

exports = module.exports = {
    addNewTodo, 
    addNewTodos,
    trashTodoList,
    visitHomepage,
    visitHashActive,
    visitHashCompleted
};