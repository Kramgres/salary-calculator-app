import {ErrorResponse, User} from '../type'

export type AuthState = {
  user: User | null
  isAuthorized: boolean
  loading: boolean
  error?: ErrorResponse
}

export enum AuthActionTypes {
  SET_USER = 'SET_USER',
  SET_ERROR = 'SET_ERROR',
  SET_LOADING = 'SET_LOADING',
  CLEAR_USER = 'CLEAR_USER',
}

export type AuthActions = { type: AuthActionTypes.SET_USER; payload: User }
  | { type: AuthActionTypes.CLEAR_USER }
| {type: AuthActionTypes.SET_LOADING; payload: boolean}
| {type: AuthActionTypes.SET_ERROR; payload: ErrorResponse}

