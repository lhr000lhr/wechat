import axios from 'axios'

export { NavigationActions } from 'react-navigation'

export { default as Storage } from './storage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })

export const setAccessToken = access_token => {
  axios.defaults.headers.common['Access-Token'] = access_token
  global.token = access_token
}
