import axios from 'axios'
import { DeviceEventEmitter } from 'react-native'

const NET_ERR = '网络错误'
/**
 * 设置BaseUrl
 * @param {*} baseUrl
 */
export function setBaseUrl(baseUrl) {
  axios.defaults.baseURL = baseUrl
}
/**
 * 设置token
 * @param {*} token
 */
export function setToken(token) {
  axios.defaults.common['Authorization'] = token
}
/**
 * 设置content-Type
 * @param {*} type
 */
export function setContentType(type) {
  axios.defaults.headers.post['Content-Type'] = type
}
// import fetch from 'dva/fetch'
// import RNFetchBlob from 'react-native-fetch-blob'
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response

  if (response.status == 401) {
    DeviceEventEmitter.emit('ReLogin')
  }

  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options = {}) {
  options.headers['token'] = global.token || ''
  let response
  try {
    response = await axios.request({
      url,
      ...options,
    })
  } catch (error) {
    if (error.response.status == 401) {
      DeviceEventEmitter.emit('ReLogin')
    } else {
      throw error
    }
  }
  checkStatus(response)
  // debugger
  const data = response.data

  return data
}
