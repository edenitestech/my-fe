

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  plugins: [
    react(),
    // ensure jwt-decode (and any other CJS) get converted properly
    commonjs({ include: /node_modules/ }),  
  ],
  base: '/public/',
  optimizeDeps: {
    include: ["jwt-decode"],
  },
});
