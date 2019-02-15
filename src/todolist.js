//Version 1 requirements:
//It should have a place to store todos
var todos = ["item 1", "item 2", "item 3"]
//It should have a way to display todos
console.log("My Todos:",todos)
//It should have a way to add new todos
todos.push("item 4")
//It should have a way to change a todo
todos.[0] = "item 1 updated"
//it should have a way to delete a todo
todos.splice(0, 1)

//Version 2 requirements:
//It should have a function to display todos
var todos = ["item 1", "item 2", "item 3"]

function displayTodos() {
  console.log("My todos:", todos);
}
//It should have a function to add todos
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}
//It should have a function to change todos
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}
//It should have a function to delete todos
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}