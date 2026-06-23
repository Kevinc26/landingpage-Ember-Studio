import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/landingpage-Koralabscr/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        clearbiz: resolve(__dirname, 'clearbiz/index.html'),
        enkiAgent: resolve(__dirname, 'enki-agent/index.html'),
        miganadocr: resolve(__dirname, 'miganadocr/index.html'),
      },
    },
  },
})
