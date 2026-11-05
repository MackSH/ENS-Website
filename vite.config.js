import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Sur GitHub Pages, le site est servi sous /<nom-du-dépôt>/.
// Si vous utilisez un domaine personnalisé, définissez BASE_PATH=/ dans le workflow.
export default defineConfig({
  plugins: [vue()],
  base: process.env.BASE_PATH ?? '/ENS-Website/',
})
