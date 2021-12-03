import {Middleware} from 'redux'

export const logger: Middleware = (store) => (next) => (action) => {
  console.groupCollapsed('dispatching', action.type)
  console.log('action', action)
  console.log('prev state', store.getState())
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}
