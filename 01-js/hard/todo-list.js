class Todo {
  constructor() {
    this.todos = []; // Using lowercase for instance variables is a common convention
  }

  add(todo) {
    this.todos.push(todo);
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos = this.todos.filter((_, ind) => ind !== index);
    }
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    }
    return null;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
