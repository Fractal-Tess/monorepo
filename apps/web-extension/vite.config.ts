import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import makeManifest from './utils/plugins/make-manifest';
import buildContentScript from './utils/plugins/build-content-script';

const root = resolve(__dirname, 'src');
const pagesDir = resolve(root, 'pages');
const publicDir = resolve(__dirname, 'public');

export default defineConfig({
  plugins: [react(), makeManifest(), buildContentScript()],
  publicDir,
  build: {
    outDir: 'build',
    sourcemap: process.env['NODE_ENV'] === 'dev',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        devtools: resolve(pagesDir, 'devtools', 'index.html'),
        panel: resolve(pagesDir, 'panel', 'index.html'),
        background: resolve(pagesDir, 'background', 'index.ts'),
        popup: resolve(pagesDir, 'popup', 'index.html'),
        newtab: resolve(pagesDir, 'newtab', 'index.html'),
        options: resolve(pagesDir, 'options', 'index.html')
      },
      output: {
        entryFileNames: chunk => `src/pages/${chunk.name}/index.js`
      }
    }
  }
});
