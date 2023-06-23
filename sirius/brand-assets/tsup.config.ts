import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/generate-assets/index.ts', 'src/apps-specs/index.ts'],
  outDir: 'lib',
  sourcemap: true,
  minify: true,
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
});
