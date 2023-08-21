import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit()],

  server: {
    port: 5173,
    strictPort: true,
    host: '0.0.0.0'
  }
};

export default config;
