import App from "./App.svelte";
import "flowbite/dist/flowbite.css";
import "./app.css";

// Initialize the app with the current URL path for proper routing
const app = new App({
  target: document.getElementById("app"),
  props: {
    url: window.location.pathname,
  },
});

export default app;
