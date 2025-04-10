<script>
  import { Card, Accordion, AccordionItem } from 'flowbite-svelte';
</script>

<div class="p-6">
  <h1 class="text-2xl font-bold mb-6">Help</h1>
  <Card padding="lg">
    <Accordion>
      <AccordionItem>
        <span slot="header">How do I import documents?</span>
        <p class="mb-2 text-gray-700">
          Navigate to the Onboard section and click on "Import Documents". 
          You can then upload your company's SSM documents following the instructions provided.
        </p>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">What file formats are supported?</span>
        <p class="mb-2 text-gray-700">
          We support PDF, JPG, PNG, and other common document formats. The maximum file size is 30MB.
        </p>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">How do I contact support?</span>
        <p class="mb-2 text-gray-700">
          You can reach our support team at support@filepillar.com or through the chat feature.
        </p>
      </AccordionItem>
    </Accordion>
  </Card>
</div>
