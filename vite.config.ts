import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Autoimport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/**/**'],
      dts: true,
      allowOverrides: true,
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/node_modules/]

    }),
    Autoimport({
      dts: true,
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      vueTemplate: true,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  
})
