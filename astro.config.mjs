import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vanhi.id.vn',
  base: '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  }
});