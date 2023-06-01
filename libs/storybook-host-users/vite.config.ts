/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/storybook-host-users',

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],
});
