import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path"
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 使用
      imports: ['vue']
    }),
    Components({
      resolvers: []
    }),
    visualizer({ open: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        xiayulei: resolve(__dirname, 'xiayulei.html'),
        zhoupei: resolve(__dirname, 'zhoupei.html'),
        xuemeixiu: resolve(__dirname, 'xuemeixiu.html'),
        zhouxiaomei: resolve(__dirname, 'zhouxiaomei.html')
      }
    }
  }
})
