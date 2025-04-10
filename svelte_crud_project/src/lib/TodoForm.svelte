<script>
  import { createEventDispatcher } from "svelte";
  import todoStore from "./TodoStore.js";

  export let editMode = false;
  export let editId = null;
  export let editText = "";
  export let editDeadline = "";

  let text = editMode ? editText : "";
  let deadline = editMode ? editDeadline : "";

  const dispatch = createEventDispatcher();

  function handleSubmit() {
    if (!text.trim()) return;

    if (editMode && editId) {
      todoStore.editTodo(editId, text.trim(), deadline);
      dispatch("editComplete");
    } else {
      todoStore.addTodo(text.trim(), deadline);
      text = "";
      deadline = "";
    }
  }

  function cancelEdit() {
    dispatch("editCancel");
  }
</script>

<div class="todo-form">
  <h2>{editMode ? "Edit Task" : "Add New Task"}</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="form-group">
      <input
        type="text"
        bind:value={text}
        placeholder="What needs to be done?"
        class="task-input"
        autofocus
      />
    </div>

    <div class="form-group">
      <input
        type="datetime-local"
        bind:value={deadline}
        class="deadline-input"
        placeholder="Deadline (optional)"
      />
    </div>

    <div class="form-buttons">
      <button type="submit" class="btn btn-primary">
        {editMode ? "Update" : "Add Task"}
      </button>

      {#if editMode}
        <button type="button" class="btn btn-secondary" on:click={cancelEdit}>
          Cancel
        </button>
      {/if}
    </div>
  </form>
</div>

<style>
  .todo-form {
    margin-bottom: 2rem;
    background: #fff;
    padding: 1.5rem 5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
  }

  input:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }

  .task-input {
    font-size: 1.1rem;
  }

  .form-buttons {
    display: flex;
    gap: 10px;
  }

  .btn {
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-primary {
    background: #4a90e2;
    color: white;
  }

  .btn-primary:hover {
    background: #3a7bc8;
    transform: translateY(-1px);
  }

  .btn-secondary {
    background: #f1f1f1;
    color: #333;
  }

  .btn-secondary:hover {
    background: #e1e1e1;
  }
</style>
