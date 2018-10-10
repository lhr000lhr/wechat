import { AsyncStorage } from 'react-native'

export const APP_AUTH_KEY = '@User:AppAuth'

export const APP_USER_KEY = '@User:User'

export const APP_TIME_KEY = '@Time:StorageTime'

export const multiConnect = arr => {
  return AsyncStorage.multiGet(arr)
}

export const singleConnect = key => {
  return AsyncStorage.getItem(key)
}

export const multiSet = arr => {
  return AsyncStorage.multiSet(arr)
}

export const multiRemove = arr => {
  return AsyncStorage.multiRemove(arr)
}
