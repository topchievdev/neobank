import path from 'path'
import webpack from 'webpack'
import { BuildEnv, BuildPaths } from './config/build/types/config'
import { buildWebpack } from './config/build/buildWebpack'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    public: path.resolve(__dirname, 'public'),
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    analyzer: env.analyzer,
    paths
  })

  return config
}
