import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 2 versions']
        })
      ]
    }
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  }
})
