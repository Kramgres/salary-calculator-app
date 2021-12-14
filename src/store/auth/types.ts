import {User} from '../type'

export type AuthState = {
  user: User | null
  isAuthorized: boolean
}

export enum AuthActionTypes {
  SET_USER = 'SET_USER',
  CLEAR_USER = 'CLEAR_USER',
}

export type AuthActions = { type: AuthActionTypes.SET_USER; payload: User }
  | { type: AuthActionTypes.CLEAR_USER }

