import {User} from '../type'

import {AuthActions, AuthActionTypes} from './types'

export const setUserStateAction = (data: User): AuthActions => {
  return {
    type: AuthActionTypes.SET_USER,
    payload: data
  }
}

export const clearUserStateAction = (): AuthActions => {
  return {
    type: AuthActionTypes.CLEAR_USER,
  }
}
