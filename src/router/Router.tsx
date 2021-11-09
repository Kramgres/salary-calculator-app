import React, {FC} from 'react'
import {Routes, BrowserRouter} from 'react-router-dom'

import {PATHS} from '../constants/paths'
import Calculator from '../pages/Calculator/Calculator.page'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Home from '../pages/Home/Home.page'

import GuestRoute from './GuestRoute'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <GuestRoute path={PATHS.root} element={<MainLayout/>}>
          <GuestRoute path={PATHS.root} element={<Home/>}/>
          <GuestRoute path={PATHS.calculator} element={<Calculator/>}/>
        </GuestRoute>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
