import { writable } from "svelte/store";

// Initialize todos from localStorage or empty array
const storedTodos = localStorage.getItem("todos");
const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];

// Create a writable store
const todoStore = writable(initialTodos);

// Create a custom store with additional methods
const customTodoStore = {
  subscribe: todoStore.subscribe,

  // Add a new todo
  addTodo: (text, deadline) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      deadline,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    todoStore.update((todos) => {
      const updatedTodos = [...todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  },

  // Delete a todo
  deleteTodo: (id) => {
    todoStore.update((todos) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  },

  // Toggle todo completion status
  toggleComplete: (id) => {
    todoStore.update((todos) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  },

  // Edit a todo
  editTodo: (id, text, deadline) => {
    todoStore.update((todos) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text,
            deadline,
            updatedAt: new Date().toISOString(),
          };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  },
};

export default customTodoStore;
