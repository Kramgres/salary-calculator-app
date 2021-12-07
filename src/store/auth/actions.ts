import {ErrorResponse, User} from '../type'

import {AuthActions, AuthActionTypes} from './types'

export const setUserStateAction = (data: User): AuthActions => {
  return {
    type: AuthActionTypes.SET_USER,
    payload: data
  }
}

export const setErrorStateAction = (error: ErrorResponse): AuthActions => {
  return {
    type: AuthActionTypes.SET_ERROR,
    payload: error
  }
}
