import { ModuleOptions } from 'webpack'
import { BuildOptions } from './types/config'
import { buildScssLoader } from './loaders/buildScssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildTsLoader } from './loaders/buildTsLoader'

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  const { mode } = options
  const isDev = mode === 'development'

  const svgLoader = buildSvgLoader()
  const scssLoader = buildScssLoader(isDev)
  const tsLoader = buildTsLoader(isDev)

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  }

  return [assetLoader, scssLoader, babelLoader, tsLoader, svgLoader]
}
