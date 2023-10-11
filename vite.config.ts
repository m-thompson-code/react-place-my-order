import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'assets/images': path.resolve(__dirname, 'node_modules/place-my-order-assets/images'),
    },
  },

  plugins: [react()],
})
