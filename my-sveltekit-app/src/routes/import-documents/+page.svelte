<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		// Redirect to the first step (upload) when navigating to /import-documents
		goto('/import-documents/upload');
	});
</script>

<div class="flex items-center justify-center p-6">
	<p>Redirecting to upload documents page...</p>
</div>
