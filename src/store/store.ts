import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'
import {logger} from './middlewares/Logger'

export const store = () => {
  return createStore(rootReducer, applyMiddleware(logger, thunk))
}

export type AppStore = ReturnType<typeof rootReducer>;
