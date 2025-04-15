<script lang="ts">
	// You can import flowbite components like this:
	// import { Input } from "flowbite-svelte";
</script>

<div class="flex items-center justify-end bg-white p-3">
	<div class="flex items-center">
		<div class="relative mr-6 w-64">
			<div class="relative w-auto">
				<div
					class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-2.5 text-gray-500 dark:text-gray-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="absolute left-3 top-2.5 h-5 w-5 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path></svg
					>
				</div>
				<input
					placeholder="Quick search for anything"
					class="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-blue-500 bg-white p-2.5 pl-10 ps-10 text-sm text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
					type="text"
				/>
			</div>
		</div>
		<div class="relative mr-4">
			<button
				class="flex items-center rounded-full p-2 hover:bg-gray-100"
				aria-label="Notifications"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-gray-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					></path>
				</svg>
				<span class="ml-2">Notifications</span>
			</button>
		</div>
		<div class="flex items-center">
			<div
				class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 font-medium text-white"
			>
				U
			</div>
			<span class="mr-3 inline-block h-6 w-px bg-gray-300"></span>
			<a href="/logout" class="text-blue-600 hover:underline">Logout</a>
		</div>
	</div>
</div>
