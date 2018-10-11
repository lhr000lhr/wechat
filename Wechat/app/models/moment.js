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

const initialState = {
  loading: RefreshState.Idle,
  refreshing: false,
  data: [],
  feedList: [],
  page: 0,
  collections: {}
}

export default {
  namespace: 'moment',
  state: {
    ...initialState,
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
        const { moment } = yield select(state => state)
        const { collections, feedList } = moment
        let page = 0
        yield put(
          createAction('refreshingStart')({
            feedList: feedList,
            page
          })
        )

        const data = yield call(service.getLatestTweets, payload)

        const newCollections = chunk(data, 5)

        yield put(
          createAction('updateState')({
            ...initialState,
            collections: newCollections,
            data: data,
            feedList: newCollections[page]
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
