import ReactRefreshTypeScript from 'react-refresh-typescript'

export const buildTsLoader = (isDev: boolean) => {
  return {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
          })
        }
      }
    ]
  }
}
