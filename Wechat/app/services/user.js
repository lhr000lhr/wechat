import { createAction, NavigationActions, setAccessToken } from '../utils'
import { Toast } from 'antd-mobile-rn'
import { AsyncStorage } from 'react-native'
import * as User from '../services/user'
import { SUCCESS, MENU } from '../config/Code'
import { APP_AUTH_KEY, APP_USER_KEY, APP_TIME_KEY } from '../config/storage'

export default {
  namespace: 'user',
  state: {
    canLogin: false,
    showLogin: false,
    userInfo: {},
    authInfo: {},
  },
  reducers: {
    loginSuccess(state, { payload }) {
      return { ...state, ...payload }
    },
    refreshData(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    //获取用户信息
    *userInfo({ payload }, { call, put, select }) {
      try {
        const userData = yield call(User.getUserInfo, payload)

        if (userData.code === SUCCESS) {
          yield put(
            createAction('loginSuccess')({
              userInfo: userData.data,
              authInfo: payload.data,
            })
          )

          yield put(createAction('refreshUserInfo')())

          yield AsyncStorage.setItem(APP_AUTH_KEY, JSON.stringify(payload.data))
          yield AsyncStorage.setItem(
            APP_USER_KEY,
            JSON.stringify(userData.data)
          )
          let currTime = Math.floor(new Date().getTime() / 1000)
          yield AsyncStorage.setItem(APP_TIME_KEY, currTime + '')
          yield put(NavigationActions.navigate({ routeName: 'Main' }))
        } else {
        }
        Toast.hide()
      } catch (error) {
        //  alert(error)
        const data = error.response
        if (data.data) {
          let { error, message } = data.data
          Toast.fail(message)
        }
      }
    },
    *handleLoginStatus({ payload }, { put, call }) {
      try {
        const result = yield AsyncStorage.getItem(APP_AUTH_KEY)
        if (!!result) {
          const app_auth = JSON.parse(result)

          const user = yield AsyncStorage.getItem(APP_USER_KEY)
          const userInfo = JSON.parse(user)

          const time = yield AsyncStorage.getItem(APP_TIME_KEY)

          const currTime = Math.floor(new Date().getTime() / 1000)

          setAccessToken(app_auth.token_type + app_auth.access_token)

          yield put(
            createAction('refreshData')({
              userInfo,
              authInfo: app_auth,
            })
          )
          //判断授权是否到期
          if (currTime - time > app_auth.expires_in) {
            yield put(NavigationActions.navigate({ routeName: 'Login' }))
          } else {
            yield put(createAction('refreshUserInfo')())
            yield put(NavigationActions.navigate({ routeName: 'Main' }))
          }
        } else {
          yield put(NavigationActions.navigate({ routeName: 'Login' }))
        }
      } catch (error) {
        yield put(NavigationActions.navigate({ routeName: 'Login' }))
      }
    },
    //重新获取用户数据
    *refreshUserInfo({ payload }, { call, put, select }) {
      try {
        // Toast.loading('刷新中...')
        const { user } = yield select(state => state)
        const userInfo = user.userInfo

        const userData = yield call(User.userDetail, {
          ...userInfo,
          ...payload,
        })
        Toast.hide()
        if (userData.code === SUCCESS) {
          yield put(createAction('loginSuccess')({ userInfo: userData.data }))
          yield AsyncStorage.setItem(
            APP_USER_KEY,
            JSON.stringify(userData.data)
          )
        } else {
          Toast.fail(userData.message, 2)
        }
      } catch (error) {
        const data = error.response
        if (data.data) {
          let { error, message } = data.data
          Toast.fail(message)
        }
      }
    },

    //修改用户昵称
    *modifyNickName({ payload }, { call, put, select }) {
      Toast.loading('信息修改中')
      try {
        const { user } = yield select(state => state)
        const userInfo = user.userInfo
        const data = yield call(User.modifyUserInfo, {
          ...userInfo,
          // ...payload,
          nickName: payload.nickName,
        })

        if (data.code === SUCCESS) {
          Toast.success(data.message, 1)
          yield put(
            createAction('refreshData')({
              userInfo: { ...user.userInfo, ...data.data },
            })
          )
          yield AsyncStorage.setItem(
            APP_USER_KEY,
            JSON.stringify(user.userInfo)
          )
          yield put(createAction('refreshUserInfo')())
          yield put(NavigationActions.back())
        } else {
          Toast.success('修改信息失败，请稍候再试！', 1)
        }
      } catch (error) {
        const data = error.response
        if (data.data) {
          let { error, message } = data.data
          Toast.fail(message)
        }
        // alert(error)
      }
    },

    //修改姓名
    *modifyName({ payload }, { call, put, select }) {
      Toast.loading('信息修改中')
      try {
        const { user } = yield select(state => state)
        const userInfo = user.userInfo
        const data = yield call(User.modifyUserInfo, {
          ...userInfo,
          // ...payload,
          name: payload.name,
        })

        if (data.code === SUCCESS) {
          Toast.success(data.message, 1)
          yield put(
            createAction('refreshData')({
              userInfo: { ...user.userInfo, ...data.data },
            })
          )
          yield AsyncStorage.setItem(
            APP_USER_KEY,
            JSON.stringify(user.userInfo)
          )
          yield put(createAction('refreshUserInfo')())
          yield put(NavigationActions.back())
        } else {
          Toast.success('修改信息失败，请稍候再试！', 1)
        }
      } catch (error) {
        const data = error.response
        if (data.data) {
          let { error, message } = data.data
          Toast.fail(message)
        }
        // alert(error)
      }
    },

    //修改用户性别
    *modifySex({ payload }, { call, put, select }) {
      Toast.loading('信息修改中')
      try {
        const { user } = yield select(state => state)
        const userInfo = user.userInfo

        const data = yield call(User.modifyUserInfo, {
          ...userInfo,
          // ...payload,
          sex: payload.sex,
        })

        if (data.code === SUCCESS) {
          Toast.success(data.message, 1)
          yield put(
            createAction('refreshData')({
              userInfo: { ...user.userInfo, ...data.data },
            })
          )
          yield AsyncStorage.setItem(
            APP_USER_KEY,
            JSON.stringify(user.userInfo)
          )
          yield put(createAction('refreshUserInfo')())
        } else {
          Toast.fail(data.message, 1)
        }
      } catch (error) {
        const data = error.response
        if (data.data) {
          let { error, message } = data.data
          Toast.fail(message)
        }
        // alert(error)
      }
    },
    //修改密码
    *modifyPassword({ payload }, { call, put, select }) {
      Toast.loading('密码修改中')
      try {
        const data = yield call(User.modifyUserPassword, {
          ...payload,
        })
        if (data.code === SUCCESS) {
          Toast.success(data.message, 1)
          yield put(createAction('refreshUserInfo')())
          yield put(NavigationActions.back())
        } else {
          Toast.fail(data.message, 1)
        }
      } catch (error) {
        const data = error.response
        if (data.data) {
          let { error, message } = data.data
          Toast.fail(message)
        }
      }
    },
    //用户退出登录
    *logout({ payload }, { call, put, select }) {
      yield AsyncStorage.removeItem(APP_AUTH_KEY)
      yield AsyncStorage.removeItem(APP_USER_KEY)
      yield AsyncStorage.removeItem(APP_TIME_KEY)

      yield put({ type: 'handleLoginStatus' })
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'handleLoginStatus' })
    },
  },
}
