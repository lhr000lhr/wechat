import { delay } from '../utils'
import request from '../utils/request'
import { userInfoUrl, latestTweets } from '../config'

export const login = async () => {
  await delay(2000)
  return true
}

/**
 * 获取用户信息
 * @param {*} param
 */
export function getUserInfo(param = {}) {
  return request(userInfoUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

/**
 * 最新状态
 * @param {*} param
 */
export function getLatestTweets(param = {}) {
  return request(latestTweets, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
