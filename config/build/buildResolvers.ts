import { Configuration } from 'webpack'
import { BuildOptions } from './types/config'
import path from 'path'

export const buildResolvers = (options: BuildOptions): Configuration['resolve'] => {
  const { paths } = options

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    alias: {
      '@classNames': path.resolve(
        paths.src,
        'shared',
        'lib',
        'classNames',
        'classNames.ts'
      ),
      '@': paths.src
    }
  }
}
