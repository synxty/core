import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/colors/index.ts'],
  outDir: 'lib',
  sourcemap: true,
  minify: true,
  format: ['esm', 'cjs'],
  dts: true,
  clean: true
});
