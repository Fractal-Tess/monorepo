import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/main.ts'],
  dts: true,
  splitting: false,
  sourcemap: true,
  outDir: 'build',
  clean: true,
  minify: true, // Minify could have issues with some package
  target: ['esnext'], // Change as per requirements
  format: ['esm'] // Change as per requirements
});
