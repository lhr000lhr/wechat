import React from 'react'
import { AppRegistry } from 'react-native'
import codePush from 'react-native-code-push'

import dva from './utils/dva'
import Router, { routerMiddleware } from './router'

import appModel from './models/app'
import routerModel from './models/router'
import { registerModels } from './models'

console.ignoredYellowBox = [
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated'
]

const app = dva({
  initialState: {},
  models: [],
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  }
})
registerModels(app)

const App = app.start(<Router />)

AppRegistry.registerComponent('DvaStarter', () => App)
