import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Banh84/", // Relative paths
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
