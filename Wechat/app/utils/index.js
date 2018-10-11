import axios from 'axios'

export { NavigationActions } from 'react-navigation'
import Moment from 'moment'
import 'moment/locale/zh-cn'

Moment().locale('zh-cn')

export const formatDate = time => {
  return Moment(time)
    .startOf('seconds')
    .fromNow()
}

export { default as Storage } from './storage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })

export const setAccessToken = access_token => {
  axios.defaults.headers.common['Access-Token'] = access_token
  global.token = access_token
}
