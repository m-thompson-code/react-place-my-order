import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@types": path.resolve(__dirname, "./src/types"),
      'assets/images': path.resolve(__dirname, 'node_modules/place-my-order-assets/images'),
    },
  },
  plugins: [react()],
});
