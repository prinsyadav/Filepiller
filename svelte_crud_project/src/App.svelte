<script>
  import TodoForm from "./lib/TodoForm.svelte";
  import TodoItem from "./lib/TodoItem.svelte";
  import todoStore from "./lib/TodoStore.js";

  let todos = [];
  let isEditing = false;
  let editingTodo = { id: null, text: "", deadline: "" };
  let filter = "all"; // all, active, completed

  // Subscribe to the todo store
  todoStore.subscribe((value) => {
    todos = value;
  });

  // Handle editing a todo
  function editTodo(event) {
    const { id, text, deadline } = event.detail;
    isEditing = true;
    editingTodo = { id, text, deadline };
  }

  // Cancel editing
  function cancelEdit() {
    isEditing = false;
    editingTodo = { id: null, text: "", deadline: "" };
  }

  // Complete editing
  function completeEdit() {
    isEditing = false;
    editingTodo = { id: null, text: "", deadline: "" };
  }

  // Filter todos
  $: filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // Count active todos
  $: activeTodoCount = todos.filter((todo) => !todo.completed).length;

  // Count completed todos
  $: completedTodoCount = todos.filter((todo) => todo.completed).length;
</script>

<main class="todo-app">
  <div class="todo-container">
    <header class="app-header">
      <h1>Todo List App</h1>
      <p class="app-description">Manage your tasks efficiently</p>
    </header>

    <TodoForm
      editMode={isEditing}
      editId={editingTodo.id}
      editText={editingTodo.text}
      editDeadline={editingTodo.deadline}
      on:editComplete={completeEdit}
      on:editCancel={cancelEdit}
    />

    <div class="todo-filters">
      <div class="todo-stats">
        <span>{activeTodoCount} active</span>
        <span>{completedTodoCount} completed</span>
      </div>

      <div class="filter-buttons">
        <button
          class="filter-btn {filter === 'all' ? 'active' : ''}"
          on:click={() => (filter = "all")}
        >
          All
        </button>
        <button
          class="filter-btn {filter === 'active' ? 'active' : ''}"
          on:click={() => (filter = "active")}
        >
          Active
        </button>
        <button
          class="filter-btn {filter === 'completed' ? 'active' : ''}"
          on:click={() => (filter = "completed")}
        >
          Completed
        </button>
      </div>
    </div>

    <div class="todo-list">
      {#if filteredTodos.length > 0}
        {#each filteredTodos as todo (todo.id)}
          <TodoItem {todo} on:edit={editTodo} />
        {/each}
      {:else}
        <div class="empty-state">
          <p>
            {#if filter === "all"}
              You don't have any tasks yet. Add one above!
            {:else if filter === "active"}
              No active tasks found.
            {:else}
              No completed tasks found.
            {/if}
          </p>
        </div>
      {/if}
    </div>
  </div>
</main>

<style>
  .todo-app {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem 1rem;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  }

  .todo-container {
    width: 100%;
    max-width: 800px;
  }

  .app-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h1 {
    color: #333;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .app-description {
    color: #666;
    font-size: 1.1rem;
  }

  .todo-list {
    margin-top: 1.5rem;
  }

  .todo-filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .filter-buttons {
    display: flex;
    gap: 8px;
  }

  .filter-btn {
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    color: #666;
  }

  .filter-btn:hover {
    background: #f1f1f1;
    color: #333;
  }

  .filter-btn.active {
    background: #4a90e2;
    color: white;
  }

  .todo-stats {
    display: flex;
    gap: 1rem;
    color: #666;
    font-size: 0.9rem;
  }

  .empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: #888;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    margin-top: 1rem;
  }
</style>
