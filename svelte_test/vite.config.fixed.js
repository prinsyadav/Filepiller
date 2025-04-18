import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: { runes: false, compatibility: { componentApi: 4 } },
    }),
  ],
  server: { historyApiFallback: true },
});
