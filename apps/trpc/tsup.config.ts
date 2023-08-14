import { defineConfig } from 'tsup';
// https://github.com/evanw/esbuild/pull/2067#issuecomment-1073039746
const ESM_REQUIRE_SHIM = `
await (async () => {
  const { dirname } = await import("path");
  const { fileURLToPath } = await import("url");

  /**
   * Shim entry-point related paths.
   */
  if (typeof globalThis.__filename === "undefined") {
    globalThis.__filename = fileURLToPath(import.meta.url);
  }
  if (typeof globalThis.__dirname === "undefined") {
    globalThis.__dirname = dirname(globalThis.__filename);
  }
  /**
   * Shim require if needed.
   */
  if (typeof globalThis.require === "undefined") {
    const { default: module } = await import("module");
    globalThis.require = module.createRequire(import.meta.url);
  }
})();
`;

export default defineConfig({
  entry: ['./src/main.ts'],
  splitting: false,
  outDir: 'build',
  banner: { js: ESM_REQUIRE_SHIM },
  clean: true,
  minify: true,
  target: ['node18'],
  format: ['esm']
});
