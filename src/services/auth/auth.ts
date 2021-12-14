import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {Dispatch} from 'redux'

import {AuthActions} from 'src/store/auth/types'
import {
  clearUserStateAction,
  setErrorStateAction,
  setLoadingStateAction,
  setUserStateAction
} from 'src/store/auth/actions'

import {LoginRequest, RegistrationRequest} from './types'

export const register = (data: RegistrationRequest) => async (dispatch: Dispatch<AuthActions>): Promise<void> => {
  const auth = getAuth()
  let response

  try {
    dispatch(setLoadingStateAction(true))
    response = await createUserWithEmailAndPassword(auth, data.email, data.password)
  } catch (error: any) {
    dispatch(setErrorStateAction({code: error.code, message: error.message}))
  } finally {
    dispatch(setLoadingStateAction(false))
  }

  if (response) {
    dispatch(setUserStateAction({ id: response.user.uid, email: response.user.email }))
  }
}

export const login = (data: LoginRequest) => async (dispatch: Dispatch<AuthActions>): Promise<void> => {
  const auth = getAuth()
  let response

  try {
    dispatch(setLoadingStateAction(true))
    response = await signInWithEmailAndPassword(auth, data.email, data.password)
  } catch (error: any) {
    dispatch(setErrorStateAction({code: error.code, message: error.message}))
  } finally {
    dispatch(setLoadingStateAction(false))
  }

  if (response) {
    dispatch(setUserStateAction({ id: response.user.uid, email: response.user.email }))
  }
}

export const logout = () => async (dispatch: Dispatch<AuthActions>): Promise<void> => {
  const auth = getAuth()

  await signOut(auth)
  dispatch(clearUserStateAction())
}
