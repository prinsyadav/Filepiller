<script lang="ts">
	import { Button, Card, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import searchIcon from '$lib/assets/searchIcon.svg';
	import onboard from '$lib/assets/onboard.svg';

	let dragActive = false;
	let uploadedFiles: File[] = [];

	function handleDragEnter() {
		dragActive = true;
	}

	function handleDragLeave() {
		dragActive = false;
	}

	function handleDrop(e: DragEvent) {
		e.preventDefault();
		dragActive = false;
		if (e.dataTransfer?.files) {
			handleFiles(e.dataTransfer.files);
		}
	}

	function handleFileInput(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.files) {
			handleFiles(target.files);
		}
	}

	function handleFiles(files: FileList) {
		for (let i = 0; i < files.length; i++) {
			uploadedFiles = [...uploadedFiles, files[i]];
		}
	}

	function goToNextStep() {
		if (uploadedFiles.length > 0) {
			window.location.href = '/import-documents/review';
		}
	}
</script>

<div class="h-screen bg-white p-4 md:p-6">
	<!-- Breadcrumb navigation -->
	<div class="mb-6 flex items-center justify-between pl-7">
		<div>
			<nav aria-label="Breadcrumb">
				<ol class="flex items-center space-x-2 text-sm text-gray-500">
					<li class="flex items-center">
						<a href="/" class="hover:text-blue-600">Onboarding</a>
						<span class="mx-2">/</span>
					</li>
					<li class="flex items-center">
						<span
							class="font-inter text-[20px] font-medium leading-[150%] tracking-normal text-black"
							>Import documents</span
						>
					</li>
				</ol>
			</nav>
		</div>
	</div>

	<div class="mx-auto max-w-6xl">
		<!-- Title and description -->
		<div>
			<div class="flex items-center px-4 py-4 sm:px-6">
				<div
					class="flex cursor-pointer items-center text-blue-600 transition-opacity duration-150 ease-in-out hover:opacity-80"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="mr-2 h-6 w-6 flex-shrink-0"
					>
						<path
							fill-rule="evenodd"
							d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12c0 1.357-.6 2.573-1.549 3.397a4.49 4.49 0 0 1-1.307 3.498 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.491 4.491 0 0 1 3.497-1.307Zm7.007 6.007a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="font-medium">Upload</span>
				</div>

				<div class="mx-4 h-0.5 flex-grow bg-gray-200"></div>

				<div
					class="flex cursor-pointer items-center text-gray-500 transition-colors duration-150 ease-in-out hover:text-gray-700"
				>
					Review
				</div>

				<div class="mx-4 h-0.5 flex-grow bg-gray-200"></div>

				<div
					class="flex cursor-pointer items-center text-gray-500 transition-colors duration-150 ease-in-out hover:text-gray-700"
				>
					Summary
				</div>
			</div>
		</div>

		<!-- Upload section -->
		<div class="mb-6 flex w-full flex-col rounded-lg px-4 py-4 sm:px-6 sm:py-6">
			<div class="mb-4 rounded-lg bg-blue-200 p-4 text-sm text-blue-900">
				<div class="mb-2 flex items-center">
					<div class="mr-2 flex-shrink-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-5 w-5 text-blue-700"
						>
							<path
								fill-rule="evenodd"
								d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12c0 1.357-.6 2.573-1.549 3.397a4.49 4.49 0 0 1-1.307 3.498 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.491 4.491 0 0 1 3.497-1.307Zm7.007 6.007a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<h3 class="text-base font-semibold">Instructions</h3>
				</div>

				<div>
					<p class="mb-2">Upload the Company's SSM documents as follows:</p>
					<br />
					<p class="mb-1">Section 14 Superform (click here for an example: xxx)</p>
					<p>
						Changes to the company details (i.e. Update of nature of business) (click here for an
						example: xxx)
					</p>
				</div>
			</div>

			<div
				role="region"
				aria-label="File upload dropzone"
				class="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-center"
				on:dragenter|preventDefault={handleDragEnter}
				on:dragleave|preventDefault={handleDragLeave}
				on:dragover|preventDefault={() => {}}
				on:drop|preventDefault={handleDrop}
				class:border-blue-500={dragActive}
			>
				<div class="flex flex-col items-center justify-center p-6">
					<img src={onboard} alt="Upload" class="mb-4 h-[33px] w-[33px] text-gray-400" />
					<p class="mb-2 text-gray-500">Click to upload or drag and drop</p>
					<p class="text-[12px] text-xs text-gray-500">Max. File Size: 30MB</p>
					<div class="mt-4">
						<Button color="blue">
							<label class="flex cursor-pointer items-center">
								<img src={searchIcon} alt="Search" class="mr-2 h-5 w-5" />
								Browse File
								<input type="file" class="hidden" on:change={handleFileInput} multiple />
							</label>
						</Button>
					</div>
				</div>
			</div>

			{#if uploadedFiles.length > 0}
				<div class="mt-6">
					<h3 class="mb-2 font-semibold">Uploaded Files ({uploadedFiles.length})</h3>
					<ul class="divide-y rounded-lg border">
						{#each uploadedFiles as file}
							<li class="flex items-center justify-between px-4 py-3"></li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
		<!-- Action buttons -->
		<div class="mb-4 mt-6 flex justify-between px-4 sm:px-6">
			<Button color="light" href="/">Back</Button>
			<Button color="blue" on:click={goToNextStep} disabled={uploadedFiles.length === 0}>
				Next: Review
			</Button>
		</div>
	</div>
</div>
