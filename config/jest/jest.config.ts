import type { Config } from 'jest'
import path from 'path'

const config: Config = {
  globals: {
    __IS_DEV__: true
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '\\.(jpg|jpeg|png)$': path.resolve(__dirname, 'jestMockImage.ts'),
    '@classNames': '<rootDir>/src/shared/lib/classNames/classNames.ts',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts']
}

export default config
