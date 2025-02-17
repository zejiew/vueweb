import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  
  return defineConfig({
    base: env.VITE_APP_BASE_URL,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3000,
      open: true
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false
    }
  })
} 