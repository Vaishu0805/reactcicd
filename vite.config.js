// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Replace `your-username` and `your-repo-name` properly
export default defineConfig({
  plugins: [react()],
  base: '/reactcicd/',  // 👈 VERY IMPORTANT
})
