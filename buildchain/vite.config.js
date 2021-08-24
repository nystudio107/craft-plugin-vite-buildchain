import vue from '@vitejs/plugin-vue'
import ViteRestart from 'vite-plugin-restart';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../src/web/assets/dist',
    rollupOptions: {
      input: {
        app: './src/js/app.ts',
        welcome: './src/js/welcome.ts',
      },
      output: {
        sourcemap: true
      },
    }
  },
  plugins: [
    nodeResolve({
      moduleDirectories: [
        path.resolve('./node_modules'),
      ],
    }),
    ViteRestart({
      reload: [
        './src/templates/**/*',
      ],
    }),
    vue(),
    // Static Asset Fixer, see: https://github.com/vitejs/vite/issues/2394
    {
      name: 'static-asset-fixer',
      enforce: 'post',
      apply: 'serve',
      transform: (code, id) => {
        return {
          code: code.replace(/\/src\/(.*)\.(svg|jp?g|png|webp)/g, 'http://localhost:3000/src/$1.$2'),
          map: null,
        }
      },
    },
  ],
  publicDir: '../src/web/assets/public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3001,
    strictPort: true,
  }
});
