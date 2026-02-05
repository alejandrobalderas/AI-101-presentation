import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AI-101-presentation/', // GitHub Pages repo name
  server: {
    port: 5000,
    open: true
  }
})
