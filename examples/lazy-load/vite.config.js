import react from '@vitejs/plugin-react'
// import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // legacy({
    //   // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
    //   targets: ['chrome 60'],
    // }),
  ],
})
