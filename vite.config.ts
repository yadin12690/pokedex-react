import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { UserConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

const shouldAnalyze = process.env.ANALYZE

const config: UserConfig = {
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  build: {
    rollupOptions: {
      plugins: !!shouldAnalyze ? [visualizer({ open: true, filename: './bundle-size/bundle.html' })] : []
    },
    sourcemap: !!shouldAnalyze
  },
}

const getConfig = () => config

export default getConfig