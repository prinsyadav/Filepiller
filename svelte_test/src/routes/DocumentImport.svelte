<script>
  import { 
    Button, 
    Card, 
    Input, 
    Label, 
    Tabs, 
    TabItem, 
    Breadcrumb, 
    BreadcrumbItem 
  } from 'flowbite-svelte';
  
  // Active tab
  let activeTab = 1;
  
  // Document data
  let documentData = {
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
  
  // File upload functions
  let dragActive = false;
  let uploadedFiles = [];
  
  function handleDragEnter() {
    dragActive = true;
  }
  
  function handleDragLeave() {
    dragActive = false;
  }
  
  function handleDrop(e) {
    e.preventDefault();
    dragActive = false;
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  }
  
  function handleFileInput(e) {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  }
  
  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      uploadedFiles = [...uploadedFiles, files[i]];
    }
  }
  
  function goToNextStep() {
    if (activeTab < 3) {
      activeTab += 1;
    }
  }
  
  function goToPreviousStep() {
    if (activeTab > 1) {
      activeTab -= 1;
    }
  }
  
  function completeProcess() {
    // Handle completion (e.g., redirect to dashboard)
    console.log('Process completed');
  }
</script>

<div class="p-4 md:p-6">
  <!-- Breadcrumbs -->
  <div class="flex justify-between items-center mb-6">
    <div>
      <Breadcrumb>
        <BreadcrumbItem href="/onboard">Onboarding</BreadcrumbItem>
        <BreadcrumbItem>Import documents</BreadcrumbItem>
      </Breadcrumb>
      <h1 class="text-2xl font-bold mt-2">Import Documents</h1>
    </div>
    
    <div>
      <div class="flex items-center">
        <div class="relative">
          <Input placeholder="Quick search for anything" class="pl-10 w-64">
            <svg slot="left" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-2.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Input>
        </div>
        
        <div class="ml-4 relative">
          <button class="p-2 rounded-full hover:bg-gray-100" aria-label="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        
        <div class="ml-4">
          <div class="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
            U
          </div>
        </div>
        
        <div class="ml-4">
          <a href="/logout" class="text-blue-600 hover:underline">Logout</a>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Progress steps (Upload, Review, Summary) -->
  <div class="p-4 flex items-center mb-4">
    <div class="flex-1 flex items-center">
      <button 
        class={`flex items-center ${activeTab >= 1 ? 'text-blue-600' : 'text-gray-500'}`}
        on:click={() => activeTab = 1}
      >
        <div class={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${activeTab >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
          {activeTab > 1 ? '✓' : '1'}
        </div>
        Upload
      </button>
      <div class={`h-1 flex-1 mx-2 ${activeTab >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
    </div>
    
    <div class="flex-1 flex items-center">
      <button 
        class={`flex items-center ${activeTab >= 2 ? 'text-blue-600' : 'text-gray-500'}`}
        on:click={() => activeTab = 2}
        disabled={uploadedFiles.length === 0}
      >
        <div class={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${activeTab >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
          {activeTab > 2 ? '✓' : '2'}
        </div>
        Review
      </button>
      <div class={`h-1 flex-1 mx-2 ${activeTab >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
    </div>
    
    <div class="flex-1 flex items-center">
      <button 
        class={`flex items-center ${activeTab >= 3 ? 'text-blue-600' : 'text-gray-500'}`}
        on:click={() => activeTab = 3}
        disabled={uploadedFiles.length === 0}
      >
        <div class={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${activeTab >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
          3
        </div>
        Summary
      </button>
    </div>
  </div>
  
  {#if activeTab === 1}
    <!-- Upload Step -->
    <div class="px-4">
      <Card class="mb-6">
        <div class="bg-blue-100 rounded-lg p-4 mb-4">
          <div class="flex">
            <div class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-2">Instructions</h3>
              <p class="text-sm">Upload the Company's SSM documents as follows:</p>
              <ul class="mt-2 text-sm">
                <li class="mb-1">Section 14 Superform (click here for an example: xxx)</li>
                <li>Changes to the company details (i.e. Update of nature of business) (click here for an example: xxx)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div 
          class={`border-2 border-dashed rounded-lg p-10 text-center ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
          on:dragenter={handleDragEnter}
          on:dragleave={handleDragLeave}
          on:dragover={(e) => e.preventDefault()}
          on:drop={handleDrop}
          role="region"
          aria-label="File upload dropzone"
        >
          <div class="flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p class="mb-2 text-gray-500">Click to upload or drag and drop</p>
            <p class="text-xs text-gray-500">Max. File Size: 30MB</p>
            <div class="mt-4">
              <Button color="blue">
                <label class="cursor-pointer">
                  Browse File
                  <input type="file" class="hidden" on:change={handleFileInput} />
                </label>
              </Button>
            </div>
          </div>
        </div>
      </Card>
      
      <div class="flex justify-between mt-6 mb-4">
        <Button color="light" href="/onboard">Back</Button>
        <Button color="blue" disabled={uploadedFiles.length === 0} on:click={goToNextStep}>Next: Review</Button>
      </div>
    </div>
  {:else if activeTab === 2}
    <!-- Review Step -->
    <div class="px-4">
      <Card>
        <Tabs style="underline">
          <TabItem open title="Header fields">
            <div class="p-4">
              <p>Document review form would go here</p>
            </div>
          </TabItem>
          <TabItem title="Comments">
            <div class="p-4">
              <p>Comments tab content</p>
            </div>
          </TabItem>
          <TabItem title="Activity">
            <div class="p-4">
              <p>Activity tab content</p>
            </div>
          </TabItem>
        </Tabs>
      </Card>
      
      <div class="flex justify-between mt-6 mb-4">
        <Button color="light" on:click={goToPreviousStep}>Back</Button>
        <Button color="blue" on:click={goToNextStep}>Next: Summary</Button>
      </div>
    </div>
  {:else if activeTab === 3}
    <!-- Summary Step -->
    <div class="px-4">
      <Card class="mb-6">
        <div class="p-4 bg-blue-100 rounded-lg mb-6">
          <p>To include basic company details. View more will take us to the company page.</p>
        </div>
        
        <h2 class="text-xl font-bold mb-6">ABC SDN BHD</h2>
        
        {#each Array(3) as _, i}
          <div class="border rounded-lg p-6 mb-6">
            <div class="grid grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <p class="text-gray-500 text-sm mb-1">Country of Incorporation</p>
                <p class="font-medium">Malaysia</p>
              </div>
              <div class="text-right">
                <Button color="light" size="xs">Edit</Button>
              </div>
              <div>
                <p class="text-gray-500 text-sm mb-1">Registration Number</p>
                <p class="font-medium">C123456789</p>
              </div>
              <div>
                <p class="text-gray-500 text-sm mb-1">Tax Number</p>
                <p class="font-medium">C123456789</p>
              </div>
              <div>
                <p class="text-gray-500 text-sm mb-1">Year of Assessment / Tax Year</p>
                <p class="font-medium">2024</p>
              </div>
            </div>
          </div>
        {/each}
      </Card>
      
      <div class="flex justify-between mt-6 mb-4">
        <Button color="light" on:click={goToPreviousStep}>Back</Button>
        <Button color="blue" on:click={completeProcess}>Complete</Button>
      </div>
    </div>
  {/if}
</div> 