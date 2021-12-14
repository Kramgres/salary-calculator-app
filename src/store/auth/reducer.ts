import {AuthActions, AuthActionTypes, AuthState} from './types'

const initialState: AuthState = {
  user: null,
  isAuthorized: false,
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
  case AuthActionTypes.CLEAR_USER: {
    return initialState
  }
  default:
    return state
  }
}

export default authReducer
