import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

export const store = () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}
