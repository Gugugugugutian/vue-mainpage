import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      main: resolve(__dirname, 'index.html'),
      // blog: resolve(__dirname, '/blog/index.html'),
      resources: resolve(__dirname, '/resources/index.html')
    }
  }
})
