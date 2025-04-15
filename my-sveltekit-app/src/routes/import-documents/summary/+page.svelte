<script lang="ts">
	import { Button, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { goto } from '$app/navigation';

	// Document data
	const documentData = {
		companyName: 'ABC SDN BHD',
		registrationNo: 'C123456789',
		taxNo: 'C123456789',
		registrationDate: '01/01/2000',
		countryOfIncorporation: 'Malaysia',
		companyType: 'S - LIMITED BY SHARES',
		subType: 'SDN. BHD.',
		purpose: 'N - NEW INCORPORATION',
		taxYear: '2024',
		businessDescription: 'TAX AND ACCOUNTING SERVICES',
		generalNature: '69200 & 64999',
		address: 'KUALA LUMPUR W.P.',
		email: 'cosec@abc.com',
		contactInfo: {}
	};

	function goToPreviousStep() {
		goto('/import-documents/review');
	}

	function completeProcess() {
		// Handle completion (e.g., redirect to dashboard)
		goto('/');
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
			<a href="/import-documents/review" class="flex items-center text-blue-600">
				<div
					class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white"
				>
					✓
				</div>
				Review
			</a>
			<div class="mx-2 h-1 flex-1 bg-blue-600"></div>
		</div>

		<div class="flex flex-1 items-center">
			<div class="flex items-center text-blue-600">
				<div
					class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white"
				>
					3
				</div>
				Summary
			</div>
		</div>
	</div>

	<div class="px-4">
		<div class="mb-6 rounded-lg bg-blue-100 p-4">
			<p>
				Company details have been successfully extracted from your documents. Please review the
				summary below and make any necessary adjustments.
			</p>
		</div>

		<h2 class="mb-6 text-xl font-bold">{documentData.companyName}</h2>

		{#each Array(3) as _, i}
			<div class="mb-6 rounded-lg border bg-white p-6">
				<div class="grid grid-cols-1 gap-y-4">
					<div class="flex items-center justify-between">
						<div>
							<p class="mb-1 text-sm text-gray-500">Country of Incorporation</p>
							<p class="font-medium">{documentData.countryOfIncorporation}</p>
						</div>
						<Button color="light" size="xs">Edit</Button>
					</div>
					<div class="flex items-center justify-between">
						<div>
							<p class="mb-1 text-sm text-gray-500">Registration Number</p>
							<p class="font-medium">{documentData.registrationNo}</p>
						</div>
						<Button color="light" size="xs">Edit</Button>
					</div>
					<div class="flex items-center justify-between">
						<div>
							<p class="mb-1 text-sm text-gray-500">Tax Number</p>
							<p class="font-medium">{documentData.taxNo}</p>
						</div>
						<Button color="light" size="xs">Edit</Button>
					</div>
					<div class="flex items-center justify-between">
						<div>
							<p class="mb-1 text-sm text-gray-500">Year of Assessment / Tax Year</p>
							<p class="font-medium">{documentData.taxYear}</p>
						</div>
						<Button color="light" size="xs">Edit</Button>
					</div>
				</div>
			</div>
		{/each}

		<div class="mb-4 mt-6 flex justify-between">
			<Button color="light" on:click={goToPreviousStep}>Back</Button>
			<Button color="blue" on:click={completeProcess}>Complete</Button>
		</div>
	</div>
</div>
