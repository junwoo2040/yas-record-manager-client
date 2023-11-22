import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@database": path.resolve(__dirname, "./src/database"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@type": path.resolve(__dirname, "./src/types"),
    },
  },
});
