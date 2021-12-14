import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  UserCredential
} from 'firebase/auth'

import {LoginRequest, RegistrationRequest} from './types'

export const register = async (data: RegistrationRequest): Promise<UserCredential> => {
  const auth = getAuth()
  return await createUserWithEmailAndPassword(auth, data.email, data.password)
}

export const login = async (data: LoginRequest): Promise<UserCredential> => {
  const auth = getAuth()
  return await signInWithEmailAndPassword(auth, data.email, data.password)
}

export const logout = async (): Promise<void> => {
  const auth = getAuth()

  return await signOut(auth)
}
