import {AuthActions, AuthActionTypes, AuthState} from './types'

const initialState: AuthState = {
  user: null,
  isAuthorized: false,
  loading: false
}

const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
  case AuthActionTypes.SET_USER: {
    return {
      ...state,
      user: action.payload,
      isAuthorized: true
    }
  }
  case AuthActionTypes.SET_LOADING: {
    return {
      ...state,
      loading: action.payload
    }
  }
  case AuthActionTypes.SET_ERROR: {
    return {
      ...state,
      error: action.payload
    }
  }
  case AuthActionTypes.CLEAR_USER: {
    return initialState
  }
  default:
    return state
  }
}

export default authReducer
