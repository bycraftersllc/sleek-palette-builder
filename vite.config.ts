import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  nitro: { 
    preset: "vercel",
    // @ts-ignore: Bypasses strict type checking for the missing vercel property
    vercel: {
      entryFormat: "node"
    }
  },
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});