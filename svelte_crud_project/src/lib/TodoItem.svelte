<script>
  import { createEventDispatcher } from "svelte";
  import todoStore from "./TodoStore.js";

  export let todo;

  const dispatch = createEventDispatcher();

  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  function getDeadlineStatus(deadline) {
    if (!deadline) return "";

    const now = new Date();
    const deadlineDate = new Date(deadline);

    if (deadlineDate < now && !todo.completed) {
      return "overdue";
    } else if (deadlineDate - now < 24 * 60 * 60 * 1000 && !todo.completed) {
      return "due-soon";
    }
    return "";
  }

  function handleEdit() {
    dispatch("edit", {
      id: todo.id,
      text: todo.text,
      deadline: todo.deadline,
    });
  }

  function handleDelete() {
    todoStore.deleteTodo(todo.id);
  }

  function handleToggleComplete() {
    todoStore.toggleComplete(todo.id);
  }
</script>

<div
  class="todo-item {todo.completed ? 'completed' : ''} {getDeadlineStatus(
    todo.deadline
  )}"
>
  <div class="todo-content">
    <label class="checkbox-container">
      <input
        type="checkbox"
        checked={todo.completed}
        on:change={handleToggleComplete}
      />
      <span class="checkmark"></span>
    </label>

    <div class="todo-details">
      <p class="todo-text">{todo.text}</p>
      {#if todo.deadline}
        <p class="deadline">
          <span class="deadline-label">Deadline:</span>
          <span class="deadline-time">
            {formatDate(todo.deadline)}
          </span>
        </p>
      {/if}
    </div>
  </div>

  <div class="todo-actions">
    <button
      class="action-btn edit-btn"
      on:click={handleEdit}
      disabled={todo.completed}
    >
      <span class="material-symbols">✎</span>
    </button>
    <button class="action-btn delete-btn" on:click={handleDelete}>
      <span class="material-symbols">✖</span>
    </button>
  </div>
</div>

<style>
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 0.8rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
  }

  .todo-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .todo-content {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    flex: 1;
  }

  .todo-details {
    flex: 1;
  }

  .todo-text {
    font-size: 1rem;
    margin: 0 0 0.3rem 0;
    color: #333;
    word-break: break-word;
  }

  .completed .todo-text {
    text-decoration: line-through;
    color: #999;
  }

  .deadline {
    margin: 0;
    font-size: 0.85rem;
    color: #666;
  }

  .deadline-label {
    font-weight: 600;
  }

  .todo-actions {
    display: flex;
    gap: 8px;
  }

  .action-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .action-btn:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .edit-btn {
    color: #4a90e2;
  }

  .delete-btn {
    color: #e25c4a;
  }

  .material-symbols {
    font-size: 1.1rem;
  }

  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
    min-height: 20px;
    min-width: 20px;
  }

  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .checkbox-container:hover input ~ .checkmark {
    border-color: #4a90e2;
  }

  .checkbox-container input:checked ~ .checkmark {
    background-color: #4a90e2;
    border-color: #4a90e2;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  .checkbox-container .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .overdue {
    border-left: 4px solid #e25c4a;
  }

  .overdue .deadline-time {
    color: #e25c4a;
    font-weight: 600;
  }

  .due-soon {
    border-left: 4px solid #e2c94a;
  }

  .due-soon .deadline-time {
    color: #e2c94a;
    font-weight: 600;
  }

  .completed {
    opacity: 0.7;
    border-left: 4px solid #4caf50;
  }
</style>
