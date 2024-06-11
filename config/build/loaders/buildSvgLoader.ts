export const buildSvgLoader = () => {
  return {
    exclude: /node_modules/,
    test: /\.svg$/i,
    use: {
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true
              }
            }
          ]
        }
      }
    }
  }
}
