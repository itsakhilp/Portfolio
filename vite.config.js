import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  optimizeDeps: { 
    // Specify MIME type for JSX files
    include: ['**/*.jsx']
  }
})
