<script>
  let inputValue = $state("");
  let submittedValue = $state("");

  function handleClick() {
    submittedValue = inputValue;
    inputValue = "";
    return submittedValue;
  }

  function clearSubmittedValues() {
    submittedValue = "";
  }
</script>

<main>
  <div>
    <input
      type="text"
      placeholder="Type something..."
      bind:value={inputValue}
      class="input"
    />
    <button onclick={handleClick} class="button"> Submit </button>
    {#if submittedValue}
      <p class="submittedAnswer">Submitted input: {submittedValue}</p>
    {/if}

    <button onclick={clearSubmittedValues} class="button1">
      Clear submitted values
    </button>
  </div>
  <div>
    
  </div>
</main>

<style>
  .input {
    padding: 0.5em;
    margin: 1em 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
  }
  .button {
    padding: 0.5em 1em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .button:hover {
    background-color: #0056b3;
  }
  .button1 {
    margin-top: 1em;
    padding: 0.5em 1em;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .button1:hover {
    background-color: #c82333;
  }
  .button1:active {
    background-color: #bd2130;
  }
  .button1:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
  }
  .submittedAnswer {
    background-color: aquamarine;
    border-radius: 4px;
    padding: 4px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid #ccc;
    margin-top: 1em;
    font-size: 1.2em;
    color: #333;
  }
  /* main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
  } */
</style>
