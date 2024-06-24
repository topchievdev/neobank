import { ILocalStorageData } from '@/shared/types/types'
import { minutesToMs } from './utils'

export const addToLocalStorage = <T>(
  key: string,
  data: T,
  minutesToLive: number
) => {
  const timeStamp = new Date().getTime()

  const item: ILocalStorageData<T> = {
    data,
    timeStamp,
    minutesToLive: minutesToMs(minutesToLive)
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export const getFromLocalStorage = <T>(key: string): T | null => {
  const itemString = localStorage.getItem(key)

  if (!itemString) {
    return null
  }

  const item: ILocalStorageData<T> = JSON.parse(itemString)
  const currentTime = new Date().getTime()

  if (currentTime - item.timeStamp > item.minutesToLive) {
    localStorage.removeItem(key)
    return null
  }

  return item.data
}
