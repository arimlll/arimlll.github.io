import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkWordCount from './src/plugins/remark-word-count.mjs';

export default defineConfig({
  site: 'https://arimlll.github.io',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkWordCount],
  },
});
