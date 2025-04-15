<script lang="ts">
	import { Button, Card, Tabs, TabItem, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { goto } from '$app/navigation';

	function goToNextStep() {
		goto('/import-documents/summary');
	}

	function goToPreviousStep() {
		goto('/import-documents/upload');
	}
</script>

<div class="p-4 md:p-6">
	<div class="mb-6 flex items-center justify-between">
		<div>
			<Breadcrumb>
				<BreadcrumbItem href="/">Home</BreadcrumbItem>
				<BreadcrumbItem>Import documents</BreadcrumbItem>
			</Breadcrumb>
		</div>
	</div>

	<div class="mb-4 flex items-center p-4">
		<div class="flex flex-1 items-center">
			<a href="/import-documents/upload" class="flex items-center text-blue-600">
				<div
					class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white"
				>
					✓
				</div>
				Upload
			</a>
			<div class="mx-2 h-1 flex-1 bg-blue-600"></div>
		</div>

		<div class="flex flex-1 items-center">
			<div class="flex items-center text-blue-600">
				<div
					class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white"
				>
					2
				</div>
				Review
			</div>
			<div class="mx-2 h-1 flex-1 bg-gray-200"></div>
		</div>

		<div class="flex flex-1 items-center">
			<div class="flex items-center text-gray-500">
				<div
					class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-700"
				>
					3
				</div>
				Summary
			</div>
		</div>
	</div>

	<div class="px-4">
		<Card class="absolute mb-6 w-full max-w-3xl bg-white shadow-md">
			<Tabs style="underline">
				<TabItem open title="Header fields">
					<div class="p-4">
						<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div class="space-y-4">
								<div>
									<label for="company-name" class="block text-sm font-medium text-gray-700"
										>Company Name</label
									>
									<input
										type="text"
										id="company-name"
										class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										value="ABC SDN BHD"
									/>
								</div>

								<div>
									<label for="registration-no" class="block text-sm font-medium text-gray-700"
										>Registration No</label
									>
									<input
										type="text"
										id="registration-no"
										class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										value="C123456789"
									/>
								</div>

								<div>
									<label for="tax-no" class="block text-sm font-medium text-gray-700">Tax No</label>
									<input
										type="text"
										id="tax-no"
										class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										value="C123456789"
									/>
								</div>
							</div>

							<div class="space-y-4">
								<div>
									<label for="registration-date" class="block text-sm font-medium text-gray-700"
										>Registration Date</label
									>
									<input
										type="text"
										id="registration-date"
										class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										value="01/01/2000"
									/>
								</div>

								<div>
									<label for="country" class="block text-sm font-medium text-gray-700"
										>Country of Incorporation</label
									>
									<input
										type="text"
										id="country"
										class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										value="Malaysia"
									/>
								</div>

								<div>
									<label for="tax-year" class="block text-sm font-medium text-gray-700"
										>Tax Year</label
									>
									<input
										type="text"
										id="tax-year"
										class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										value="2024"
									/>
								</div>
							</div>
						</div>
					</div>
				</TabItem>
				<TabItem title="Comments">
					<div class="p-4">
						<textarea
							class="h-40 w-full rounded-md border border-gray-300 p-4"
							placeholder="Add your comments here..."
						></textarea>
						<div class="mt-4">
							<Button color="blue">Add Comment</Button>
						</div>
					</div>
				</TabItem>
				<TabItem title="Activity">
					<div class="p-4">
						<ul class="space-y-4">
							<li class="border-l-2 border-blue-500 py-2 pl-4">
								<p class="text-sm">Document uploaded by <span class="font-medium">You</span></p>
								<p class="text-xs text-gray-500">Today at 10:30 AM</p>
							</li>
							<li class="border-l-2 border-green-500 py-2 pl-4">
								<p class="text-sm">Review started by <span class="font-medium">You</span></p>
								<p class="text-xs text-gray-500">Today at 10:35 AM</p>
							</li>
						</ul>
					</div>
				</TabItem>
			</Tabs>
		</Card>

		<div class="mb-4 mt-6 flex justify-between">
			<Button color="light" on:click={goToPreviousStep}>Back</Button>
			<Button color="blue" on:click={goToNextStep}>Next: Summary</Button>
		</div>
	</div>
</div>
