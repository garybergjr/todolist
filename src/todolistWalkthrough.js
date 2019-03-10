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

//Version 3 requirements (Object)
//It should store the todos array on an object
//It should have a displayTodos method
//It should have an addTodo method
//It should have a changeTodo method
//It should have a deleteTodo method
//It should store the todos array on an object
//It should have a displayTodos method
//It should have an addTodo method
//It should have a changeTodo method
//It should have a deleteTodo method
var todolist = {
  todos: ["item 1", "item 2", "item 3"],
  displayTodos: function() {
    console.log("My Todos", this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
