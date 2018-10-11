import _ from 'lodash'

import {
  createAction,
  NavigationActions,
  Storage,
  delay,
  chunk
} from '../utils'
import RefreshState from '../components/widget/RefreshState'
import * as service from '../services/auth'

export default {
  namespace: 'moment',
  state: {
    loading: RefreshState.Idle,
    refreshing: false,
    data: [],
    feedList: [],
    page: 0,
    collections: {}
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
    refreshingStart(state, { payload }) {
      return {
        ...state,
        ...payload,
        refreshing: true
      }
    },
    refreshingEnd(state, { payload }) {
      return {
        ...state,
        ...payload,
        refreshing: false
      }
    },
    loadingStart(state, { payload }) {
      return { ...state, ...payload, loading: RefreshState.Refreshing }
    },
    loadingEnd(state, { payload }) {
      return { ...state, ...payload, loading: RefreshState.Idle }
    },
    loadingNoMoreData(state, { payload }) {
      return { ...state, ...payload, loading: RefreshState.NoMoreData }
    },

    appdendMoreData(state, { newData }) {
      const oringalData = state.data
      const combinedData = [...oringalData, ...newData]

      return { ...state, ...combinedData }
    },

    changeData(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    //获取所有频道
    *allMoment({ payload }, { call, put, select }) {
      try {
        yield put(createAction('refreshingStart')({}))

        const { moment } = yield select(state => state)
        const { page } = moment

        const data = yield call(service.getLatestTweets, payload)

        const collections = chunk(data, 5)

        yield put(
          createAction('updateState')({
            collections,
            data: data,
            feedList: collections[page]
          })
        )

        yield put(createAction('refreshingEnd')({}))
      } catch (error) {
        // console.log(data)
      }
    },

    //加载更多
    *loadMore({ payload }, { call, put, select }) {
      // try {
      try {
        yield put(createAction('loadingStart')({}))
        yield call(delay, 1000)

        const { moment } = yield select(state => state)

        const { page, feedList, collections } = moment

        const currentPage = page + 1

        const newData = collections[currentPage]

        yield put(
          createAction(
            currentPage === collections.length - 1
              ? 'loadingNoMoreData'
              : 'loadingEnd'
          )({
            feedList: [...feedList, ...newData],
            page: currentPage
          })
        )
      } catch (error) {
        yield put(createAction('loadingNoMoreData')({}))
      }
    }
  }
}
