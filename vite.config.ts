import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      store: '/src/store',
      // hooks: '/src/hooks',
      components: '/src/components',
      pages: '/src/pages',
      css: '/src/css',
      assets: '/src/assets',
    },
  },
})
