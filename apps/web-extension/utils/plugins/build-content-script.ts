import colorLog from '../log.ts';
import { type PluginOption, build } from 'vite';
import { join, dirname } from 'node:path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const outDir = join(__dirname, '../../build');
const packages = [
  {
    content: join(__dirname, '../../src/pages/content/index.tsx')
  }
];

export default function buildContentScript(): PluginOption {
  return {
    name: 'build-content',
    async closeBundle() {
      for (const _package of packages) {
        console.log('Build content script called');
        await build({
          publicDir: false,
          plugins: [cssInjectedByJsPlugin()],
          build: {
            outDir,
            sourcemap: process.env['NODE_ENV'] === 'true',
            emptyOutDir: false,
            rollupOptions: {
              input: _package,
              output: {
                entryFileNames: chunk => {
                  return `src/pages/${chunk.name}/index.js`;
                }
              }
            }
          },
          configFile: false
        });
      }

      colorLog('Content code build successfully', 'success');
    }
  };
}
