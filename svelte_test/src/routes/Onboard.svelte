<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  onMount(() => {
    // Redirect to the import-documents page
    console.log("Redirecting to import-documents");
    navigate("/import-documents");
  });
</script>

<div class="p-6">
  <h1 class="text-2xl font-bold mb-6">Redirecting to Import Documents...</h1>
  <p>Please wait while you are being redirected...</p>
</div>
