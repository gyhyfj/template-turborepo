/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { viteElectronDev } from './plugins/vite.electron.dev'
import { viteElectronBuild } from './plugins/vite.electron.build'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vitest'],
      dts: true,
    }),
    viteElectronDev(),
    viteElectronBuild(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: { includeSource: ['src/**/*.{js,ts}'] },
})
