import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/alerts': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api^\/alerts/, ''),
      },
        '/api/auth': {
          target: 'http://localhost:3002',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api^\/auth/, ''),
        },
          '/api/data': {
            target: 'http://localhost:3003',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api^\/data/, ''),
          },
          '/api/prediction': {
            target: 'http://localhost:3004',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api^\/prediction/, ''),
          },
          '/api/user': {
            target: 'http://localhost:3005',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api^\/user/, ''),
          },
    },
  
  },
});
