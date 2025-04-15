<script lang="ts">
	import { Button, Card, Tabs, TabItem } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	import searchIcon from '$lib/assets/searchIcon.svg';

	function goToNextStep() {
		goto('/import-documents/summary');
	}

	function goToPreviousStep() {
		goto('/import-documents/upload');
	}
</script>

<div class="md:p-15 h-screen bg-white p-4">
	<!-- Breadcrumb navigation -->
	<div class="mb-6 flex items-center justify-between pl-3">
		<div>
			<nav aria-label="Breadcrumb">
				<ol class="flex items-center space-x-2 text-sm text-gray-500">
					<li class="flex items-center">
						<a href="/" class="hover:text-blue-600">Onboard</a>
						<span class="mx-2">/</span>
					</li>
					<li class="flex items-center">
						<span
							class="font-inter text-[20px] font-medium leading-[150%] tracking-normal text-black"
							>Import Documents</span
						>
					</li>
				</ol>
			</nav>
		</div>
	</div>

	<div class="mx-auto max-w-6xl">
		<!-- Progress steps -->
		<div class="mb-6">
			<div class="flex items-center justify-between px-4 py-4">
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

				<div class="mx-4 h-0.5 flex-grow bg-blue-600"></div>

				<div
					class="flex cursor-pointer items-center text-blue-600 transition-colors duration-150 ease-in-out"
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
					<span class="font-medium">Review</span>
				</div>

				<div class="mx-4 h-0.5 flex-grow bg-gray-200"></div>

				<div class="text-gray-500">Summary</div>
			</div>
		</div>

		<!-- Document review section with split view -->
		<div class="flex gap-4">
			<!-- Left side: Document controls and preview - 50% width -->
			<div class="flex w-1/2 flex-col">
				<!-- Document controls -->
				<div
					class="mb-5 flex items-center justify-between rounded-lg border border-gray-200 bg-white"
				>
					<div class="pl-15 flex w-auto items-start gap-4">
						<button class="rounded hover:bg-gray-100" aria-label="Move down">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								class="h-5 w-5 text-gray-700"
							>
								<path
									fill="currentColor"
									d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
								></path>
							</svg>
						</button>
						<button class="rounded hover:bg-gray-100" aria-label="Move up">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								class="h-5 w-5 text-gray-700"
							>
								<path
									fill="currentColor"
									d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
								></path>
							</svg>
						</button>
					</div>
					<div class="flex items-center gap-4 pl-7">
						<button class="rounded hover:bg-gray-100" aria-label="Zoom out">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								class="h-5 w-5 text-gray-700"
							>
								<path fill="currentColor" d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"></path>
							</svg>
						</button>
						<button class="rounded hover:bg-gray-100" aria-label="Zoom in">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								class="h-5 w-5 text-gray-700"
							>
								<path
									fill="currentColor"
									d="M19 13h-6v6a1 1 0 0 1-2 0v-6H5a1 1 0 0 1 0-2h6V5a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2z"
								></path>
							</svg>
						</button>
					</div>
					<div class="flex items-end p-3 pr-9">
						<span class="text-sm font-medium text-gray-700">Actual size</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ml-1 h-4 w-4 text-gray-500"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>

				<!-- Document preview -->
				<div class="h-[550px] overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
					<!-- Replace with actual document preview -->
					<img src="/demo-image.svg" alt="Document preview" class="h-full w-full object-contain" />
				</div>
			</div>

			<div class="h-full w-px bg-black"></div>

			<!-- Right side: Form with extracted data - 50% width -->
			<div class="flex w-1/2 flex-col space-y-5 bg-white">
				<!-- Tabs -->
				<div class="flex space-x-1 rounded-lg border border-gray-200">
					<button
						class="flex-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
					>
						Header fields
					</button>
					<button
						class="flex-1 rounded px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
					>
						Comments
					</button>
					<button
						class="flex-1 rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
					>
						Activity
					</button>
				</div>

				<div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
					<h3 class="mb-5 text-base font-medium text-gray-800">Core information</h3>
					<div
						class="grid grid-cols-1 gap-x-6 gap-y-4 rounded-lg border border-gray-200 p-2 md:grid-cols-2"
					>
						<div>
							<label for="proposed-name" class="mb-1 block text-sm font-medium text-gray-700"
								>Proposed Name</label
							>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="proposed-name"
										type="text"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="ABC SDN BHD"
										readOnly
										aria-label="Proposed Name"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear Proposed Name"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>

						<div>
							<label for="lodging-ref" class="mb-1 block text-sm font-medium text-gray-700"
								>Lodging Reference No</label
							>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="lodging-ref"
										type="text"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="ABC SDN BHD"
										readOnly
										aria-label="Lodging Reference No"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear Lodging Reference No"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/></svg
										>
									</button>
								</div>
							</div>
						</div>

						<div>
							<label for="purpose" class="mb-1 block text-sm font-medium text-gray-700"
								>Purpose</label
							>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="purpose"
										type="text"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="N - NEW INCORPORATION"
										readOnly
										aria-label="Purpose"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear Purpose"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/></svg
										>
									</button>
								</div>
							</div>
						</div>

						<div>
							<label for="company-type" class="mb-1 block text-sm font-medium text-gray-700"
								>Company Type</label
							>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="company-type"
										type="text"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="S - LIMITED BY SHARES"
										readOnly
										aria-label="Company Type"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear Company Type"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/></svg
										>
									</button>
								</div>
							</div>
						</div>

						<div>
							<label for="sub-type" class="mb-1 block text-sm font-medium text-gray-700"
								>Sub Type</label
							>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="sub-type"
										type="text"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="SDN. BHD."
										readOnly
										aria-label="Sub Type"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear Sub Type"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/></svg
										>
									</button>
								</div>
							</div>
						</div>

						<div>
							<label for="incorp-date" class="mb-1 block text-sm font-medium text-gray-700"
								>Incorporation Date</label
							>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="incorp-date"
										type="text"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="01/01/2000"
										readOnly
										aria-label="Incorporation Date"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear Incorporation Date"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/></svg
										>
									</button>
								</div>
							</div>
						</div>

						<div>
							<label for="reg-no" class="mb-1 block text-sm font-medium text-gray-700"
								>Registration No</label
							>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="reg-no"
										type="text"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="123456 (123456 A)"
										readOnly
										aria-label="Registration No"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear Registration No"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/></svg
										>
									</button>
								</div>
							</div>
						</div>

						<div>
							<label for="nature-business" class="mb-1 block text-sm font-medium text-gray-700"
								>General Nature of Business</label
							>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="nature-business"
										type="text"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="69200 & 64999"
										readOnly
										aria-label="General Nature of Business"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear General Nature of Business"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/></svg
										>
									</button>
								</div>
							</div>
						</div>

						<div>
							<label for="business-desc" class="mb-1 block text-sm font-medium text-gray-700"
								>Business Description</label
							>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="business-desc"
										type="text"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="TAX AND ACCOUNTING SERVICES"
										readOnly
										aria-label="Business Description"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear Business Description"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/></svg
										>
									</button>
								</div>
							</div>
						</div>

						<div>
							<label for="contact-info" class="mb-1 block text-sm font-medium text-gray-700"
								>Contact Information</label
							>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="contact-info"
										type="text"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="[object Object]"
										readOnly
										aria-label="Contact Information"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear Contact Information"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/></svg
										>
									</button>
								</div>
							</div>
						</div>

						<div>
							<label for="reg-address" class="mb-1 block text-sm font-medium text-gray-700"
								>Registered Address</label
							>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="reg-address"
										type="text"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="KUALA LUMPUR W.P."
										readOnly
										aria-label="Registered Address"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear Registered Address"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/></svg
										>
									</button>
								</div>
							</div>
						</div>

						<div>
							<label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email</label>
							<div class="relative">
								<div
									class="flex items-center overflow-hidden rounded-md border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
								>
									<input
										id="email"
										type="email"
										class="block w-full flex-1 border-none bg-transparent px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-0"
										value="cosec@abc.com"
										readOnly
										aria-label="Email"
									/>
									<button
										type="button"
										class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none"
										aria-label="Clear Email"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/></svg
										>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Action buttons -->
		<div class="mb-4 mt-6 flex justify-between">
			<Button color="light" on:click={goToPreviousStep}>Back</Button>
			<Button color="blue" on:click={goToNextStep} class="bg-blue-600 hover:bg-blue-700">
				Next: Summary
			</Button>
		</div>
	</div>
</div>
