import React, {FC, useEffect} from 'react'
import {BrowserRouter, Routes} from 'react-router-dom'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useDispatch} from 'react-redux'

import {PATHS} from 'src/constants/paths'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import Home from 'src/pages/Home/Home.page'
import SalaryCalculator from 'src/pages/SalaryCalculator/SalaryCalculator'
import Login from 'src/pages/Auth/Login/Login'
import Registration from 'src/pages/Auth/Registration/Registration'
import {setUserStateAction} from 'src/store/auth/actions'

import GuestRoute from './GuestRoute'

const Router: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const auth = getAuth()
    return onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUserStateAction({id: user?.uid, email: user?.email}))
      }
    })
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <GuestRoute path={PATHS.root} element={<MainLayout/>}>
          <GuestRoute path={PATHS.root} element={<Home/>}/>
          <GuestRoute path={PATHS.calculator} element={<SalaryCalculator/>}/>
          <GuestRoute path={PATHS.login} element={<Login/>}/>
          <GuestRoute path={PATHS.registration} element={<Registration/>}/>
        </GuestRoute>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
