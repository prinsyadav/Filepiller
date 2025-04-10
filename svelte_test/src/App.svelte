<script>
  import { Router, Route } from "svelte-routing";
  import Sidebar from "./components/Sidebar.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./routes/Home.svelte";
  import Onboard from "./routes/Onboard.svelte";
  import DocumentImport from "./routes/DocumentImport.svelte";
  import ClientList from "./routes/ClientList.svelte";
  import BetaAI from "./routes/BetaAI.svelte";
  import Settings from "./routes/Settings.svelte";
  import Integrations from "./routes/Integrations.svelte";
  import Help from "./routes/Help.svelte";

  // Get the current URL from props (passed by main.js)
  export let url = "";
</script>

<Router {url}>
  <div class="flex h-screen bg-gray-50">
    <Sidebar />

    <main class="flex-1 overflow-hidden flex flex-col">
      <Navbar />

      <div class="flex-1 overflow-y-auto p-0">
        <Route path="/" component={Home} />
        <Route path="/onboard" component={Onboard} />
        <Route path="/import-documents" component={DocumentImport} />
        <Route path="/import-documents/upload" component={DocumentImport} />
        <Route path="/import-documents/review" component={DocumentImport} />
        <Route path="/import-documents/summary" component={DocumentImport} />
        <Route path="/client-list" component={ClientList} />
        <Route path="/beta-ai" component={BetaAI} />
        <Route path="/settings" component={Settings} />
        <Route path="/integrations" component={Integrations} />
        <Route path="/help" component={Help} />
      </div>
    </main>
  </div>
</Router>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
