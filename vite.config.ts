import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

let plugins = [react()];

// Try to load componentTagger if available (optional)
try {
  const { componentTagger } = require("lovable-tagger");
  plugins = [react(), componentTagger()];
} catch (e) {
  // componentTagger is optional, continue without it
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    target: "ES2020",
  },
  plugins: plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
