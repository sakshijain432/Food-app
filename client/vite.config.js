import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],  // lowercase r here
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    }
  }
})
