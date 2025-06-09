// // vite.config.js
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import commonjs from "@rollup/plugin-commonjs";

// export default defineConfig({
//   plugins: [
//     react(),
//     // Convert all CJS modules under node_modules to ES
//     commonjs({ include: /node_modules/ }),
//   ],
//   optimizeDeps: {
//     include: [
//       "jwt-decode",
//       "@tanstack/react-query",
//       "react",
//       "react/jsx-runtime",
//     ],
//   },
//   build: {
//     commonjsOptions: {
//       // make sure Rollup pulls in CJS versions of RCQ
//       include: [/node_modules/],
//     },
//   },
// });

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    // this enables the new JSX transform and fast refresh
    react()
  ],
  optimizeDeps: {
    // force Vite to pre-bundle these so imports like "react/jsx-runtime" work
    include: [
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ]
  }
});

