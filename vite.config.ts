import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import { resolve } from 'path'
import manifest from './src/manifest'

export default defineConfig({
  build: {
    // dist/ may be locked by a loaded extension on Windows; keep builds isolated.
    outDir: 'dist-new',
  },
  plugins: [
    react(),
    crx({ manifest }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
