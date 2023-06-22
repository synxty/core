import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(
  {
    test: {
      globals: true,
      setupFiles: ['vitest.setup.ts']
    },
    plugins: [ tsconfigPaths() ]
  }
);
