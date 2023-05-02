import { defineConfig}  from 'tsup';

export default defineConfig({
  entry: ['src/icons/index.ts', 'src/config/index.ts'],
  outDir: 'lib',
  sourcemap: true,
  minify: true,
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
});
