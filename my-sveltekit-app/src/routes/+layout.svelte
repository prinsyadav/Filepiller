<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<div class="flex h-screen bg-gray-50">
	<Sidebar />

	<main class="flex flex-1 flex-col overflow-hidden">
		<Navbar />

		<div class="flex-1 overflow-y-auto p-0">
			{@render children()}
		</div>
	</main>
</div>
