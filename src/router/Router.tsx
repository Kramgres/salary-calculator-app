import React, {FC, useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useDispatch} from 'react-redux'

import {PATHS} from 'src/constants/paths'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import Home from 'src/pages/Home/Home.page'
import SalaryCalculator from 'src/pages/SalaryCalculator/SalaryCalculator'
import Login from 'src/pages/Auth/Login/Login'
import Registration from 'src/pages/Auth/Registration/Registration'
import {setUserStateAction} from 'src/store/auth/actions'

import Settings from '../pages/User/Settings/Settings'

import PrivateRoute from './PrivateRoute'

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
        <Route path={PATHS.root} element={<MainLayout/>}>
          <Route path={PATHS.root} element={<Home/>}/>
          <Route path={PATHS.calculator} element={<SalaryCalculator/>}/>
          <Route path={PATHS.login} element={<Login/>}/>
          <Route path={PATHS.registration} element={<Registration/>}/>
          <Route path={PATHS.user}>
            <Route path={PATHS.settings} element={<PrivateRoute><Settings/></PrivateRoute>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
