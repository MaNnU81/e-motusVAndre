
import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'motus-list': '/src/components/motus-list.ts'
      }
    }
  }
})