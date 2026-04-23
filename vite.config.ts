import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',       // simulate the browser
    globals: true,              // no need to import describe/it/expect
    setupFiles: './src/setupTests.ts',
  },
})
