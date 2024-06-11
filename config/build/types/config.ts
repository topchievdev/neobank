type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string
  output: string
  html: string
  public: string
  src: string
}

export interface BuildOptions {
  port: number
  paths: BuildPaths
  mode: BuildMode
  analyzer?: boolean
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  analyzer?: boolean
}
