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

export const setLoadingStateAction = (loading: boolean): AuthActions => {
  return {
    type: AuthActionTypes.SET_LOADING,
    payload: loading
  }
}

export const clearUserStateAction = (): AuthActions => {
  return {
    type: AuthActionTypes.CLEAR_USER,
  }
}
