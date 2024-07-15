import path from 'path'
import webpack from 'webpack'
import Dotenv from 'dotenv-webpack'
import { Configuration } from 'webpack'
import { BuildOptions } from './types/config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {
  const { mode, paths, analyzer } = options

  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico')
    })
  ]

  if (isDev) {
    plugins.push(
      new webpack.ProgressPlugin(),
      new ReactRefreshWebpackPlugin(),
      new Dotenv()
    )
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    )
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
