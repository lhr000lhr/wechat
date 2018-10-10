import appModel from './app'
import router from './router'
import moment from './moment'

export const registerModels = app => {
  app.model(appModel)
  app.model(router)
  app.model(moment)
}
