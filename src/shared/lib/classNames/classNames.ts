import type { Mods } from '@/shared/types/classNames'

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter(Boolean)
  ]
    .join(' ')
    .trimStart()
    .trimEnd()
}
