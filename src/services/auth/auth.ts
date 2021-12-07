import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import {Dispatch} from 'redux'

import {AuthActions} from '../../store/auth/types'
import {setErrorStateAction, setUserStateAction} from '../../store/auth/actions'

import {RegistrationRequest} from './types'

export const registerUser = (data: RegistrationRequest) => async (dispatch: Dispatch<AuthActions>): Promise<void> => {
  const auth = getAuth()
  try {
    const response = await createUserWithEmailAndPassword(auth, data.email, data.password)
    dispatch(setUserStateAction({ id: response.user.uid, email: response.user.email }))
  } catch (error: any) {
    dispatch(setErrorStateAction({code: error.code, message: error.message}))
  }
}
