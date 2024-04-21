import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      $components: '@monorepo/ui-react/components',
      $utils: resolve('./src/utils.ts'),
      '@ui-utils': '@monorepo/ui-react/utils'
    }
  }
});
