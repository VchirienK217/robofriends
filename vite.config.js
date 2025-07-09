import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/robofriends/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0 // This ensures font files won't be inlined as data URLs
  },
  plugins: [react()],
  assetsInclude: ['**/*.woff'], // Explicitly include WOFF fonts as assets
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['..']
    }
  }
})