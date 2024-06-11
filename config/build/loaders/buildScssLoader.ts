import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildScssLoader = (isDev: boolean) => {
  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
        namedExport: false,
        localIdentName: isDev
          ? '[path][name]__[local]--[hash:base64:5]'
          : '[hash:base64:8]'
      }
    }
  }

  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      'sass-loader'
    ],
    exclude: /node_modules/
  }
}
