import axios from 'axios'

export const baseUrl = 'http://thoughtworks-ios.herokuapp.com'

export const userInfoUrl = baseUrl + '/user/jsmith'
export const latestTweets = baseUrl + '/user/jsmith/tweets'

//设置全局host
axios.defaults.baseURL = baseUrl

axios.defaults.headers.post['Content-Type'] = 'application/json'
