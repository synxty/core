import { defineConfig}  from 'tsup';

export default defineConfig({
  entry: ['icons/index.ts'],
  outDir: 'lib/icons',
  sourcemap: true,
  minify: true,
  format: ['esm', 'cjs'],
  dts: true
});
