import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const variablesPath = path
  .resolve(__dirname, 'src/styles/_variables.scss')
  .replace(/\\/g, '/')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${variablesPath}" as *;\n`,
      },
    },
  },
})