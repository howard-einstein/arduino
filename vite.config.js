import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3300,
    host: "0.0.0.0",
    open: false,
  },
  build: {
    outDir: "dist",
  },
  // Serve the pre-built assets as-is
  publicDir: "public",
});
