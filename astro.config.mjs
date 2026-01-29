import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/server';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind()
  ],
});