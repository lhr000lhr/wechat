import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'

export default {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,

    userInfo: {}
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    *loadStorage(action, { call, put }) {
      const login = yield call(Storage.get, 'login', false)
      const userInfo = yield call(Storage.get, 'userInfo', false)

      yield put(
        createAction('updateState')({ login, userInfo, loading: false })
      )
      if (login) {
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })]
          })
        )
      }
    },
    *login({ payload }, { call, put }) {
      yield put(createAction('updateState')({ fetching: true }))
      const login = yield call(authService.login, payload)
      let userInfo
      if (login) {
        userInfo = yield call(authService.getUserInfo, payload)
        debugger
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })]
          })
        )
      }
      yield put(
        createAction('updateState')({ login, userInfo, fetching: false })
      )
      Storage.set('login', login)
      Storage.set('userInfo', userInfo)
    },
    *logout(action, { call, put }) {
      yield call(Storage.set, 'login', false)
      yield put(createAction('updateState')({ login: false }))
    }
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' })
    }
  }
}
