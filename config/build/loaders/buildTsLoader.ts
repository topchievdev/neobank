import ReactRefreshTypeScript from 'react-refresh-typescript'

export const buildTsLoader = (isDev: boolean) => {
  return {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: false,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
          })
        }
      }
    ]
  }
}
