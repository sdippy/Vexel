import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [],
  },
  plugins: [
    react(),
    svgr(),
    visualizer({
      open: true,
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@web3icons")) return "web3icons";
            if (id.includes("lightweight-charts")) return "lightweight-charts";
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("@tanstack/react-query")) return "query";
            if (id.includes("react-router-dom")) return "router";
            if (id.includes("react")) return "vendor";

            return "vendor";
          }
        },
      },
    },
  },
});
