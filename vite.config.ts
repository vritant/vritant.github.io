import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      {
        name: 'copy-cname',
        closeBundle() {
          // Copy CNAME file to docs directory after build
          const cnamePath = path.resolve(__dirname, 'CNAME');
          const docsCnamePath = path.resolve(__dirname, 'docs', 'CNAME');
          try {
            copyFileSync(cnamePath, docsCnamePath);
            console.log('✓ CNAME file copied to docs directory');
          } catch (error) {
            console.warn('⚠ Could not copy CNAME file:', error);
          }
        },
      },
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    // Build the static site into "docs" so GitHub Pages can serve it directly
    build: {
      outDir: 'docs',
    },
    // For a user site like vritant.github.io, the base path is the domain root
    base: '/',
  };
});
