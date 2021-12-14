import React, {FC, ReactElement} from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {getUserAuthorizedState} from '../store/auth/getters'

type PropsType = {
  children: ReactElement
}

const PrivateRoute: FC<PropsType> = ({children}) => {
  const isAuthorized = useSelector(getUserAuthorizedState)

  return isAuthorized ? children : <Navigate to="/login" />
}

export default PrivateRoute
