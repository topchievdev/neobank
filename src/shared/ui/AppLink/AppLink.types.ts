export type TAppLinkTheme = 'primary' | 'accent'
export type TAppLinkWeight =
  | '400'
  | '500'
  | '700'
  | 'regular'
  | 'medium'
  | 'bold'

export const appLinkWeightMapper: Record<TAppLinkWeight, string> = {
  '400': 'link--regular',
  '500': 'link--medium',
  '700': 'link--bold',
  regular: 'link--regular',
  medium: 'link--medium',
  bold: 'link--bold'
}

export const appLinkThemeMapper: Record<TAppLinkTheme, string> = {
  primary: 'link--primary',
  accent: 'link--accent'
}
