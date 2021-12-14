import {AppStore} from '../store'
import {User} from '../type'

import {AuthState} from './types'

export const getAuthState = (state: AppStore): AuthState => {
  return state.auth
}

export const getUserAuthorizedState = (state: AppStore): boolean => {
  const authState = getAuthState(state)
  return authState.isAuthorized
}

export const getUserInfoState = (state: AppStore): User | null => {
  const authState = getAuthState(state)
  return authState.user
}

export const getUserLoadingState = (state: AppStore): boolean => {
  const authState = getAuthState(state)
  return authState.loading
}
