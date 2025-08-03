import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/reactcicd/',  // 👈 VERY IMPORTANT
  plugins: [react()],
})


