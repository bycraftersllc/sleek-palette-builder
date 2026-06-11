import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Force enable nitro so it doesn't skip the deployment plugin
  nitro: true, 
  tanstackStart: {
    server: {
      entry: "server"
    },
  },
  vite: {
    // Keep your existing plugins and configurations below if you have any
  }
});