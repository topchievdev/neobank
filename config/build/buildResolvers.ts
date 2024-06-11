import { Configuration } from 'webpack'
import { BuildOptions } from './types/config'

export const buildResolvers = (
  options: BuildOptions
): Configuration['resolve'] => {
  const { paths } = options

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    alias: {
      '@': paths.src
    }
  }
}
