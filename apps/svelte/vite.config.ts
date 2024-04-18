import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { join } from 'node:path';

export default defineConfig({
  plugins: [svelte()],

  resolve: {
    alias: {
      $lib: join(import.meta.dirname, 'src/lib')
    }
  },

  publicDir: 'static',
  clearScreen: false,

  // Add 'TAURI_' prefix if using with tauri
  envPrefix: ['VITE_']

  // Uncomment if using with tauri
  // build: {
  // target: ['es2021', 'chrome100', 'safari13'],
  // minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
  // sourcemap: !!process.env.TAURI_DEBUG
  // }
});
