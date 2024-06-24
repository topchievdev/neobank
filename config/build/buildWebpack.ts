import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options

  const isDev = mode === 'development'

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      publicPath: '/',
      filename: '[name].[contenthash].js',
      clean: true
    },
    module: {
      rules: buildLoaders(options)
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : 'source-map'
  }
}
