// Config used ONLY to produce the static package for KingHost (Apache shared hosting).
// Build with: bunx vite build --config vite.config.static.mts
// The dev server and the Lovable publish flow keep using vite.config.ts.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      autoSubfolderIndex: false,
    },
  },
  nitro: {
    preset: "static",
    output: { dir: ".static-out" },
  },
});
