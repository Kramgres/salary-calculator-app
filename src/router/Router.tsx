import React from 'react'
import { Routes, BrowserRouter } from 'react-router-dom'

import {PATHS} from '../constants/paths'
import Calculator from '../pages/Calculator/Calculator.page'
import MainLayout from '../layouts/MainLayout/MainLayout'

import GuestRoute from './GuestRoute'

const Router = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <GuestRoute path={PATHS.calculator} element={<Calculator/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default Router