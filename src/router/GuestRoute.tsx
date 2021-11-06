import React, {FC, ReactElement} from 'react'
import {Route} from 'react-router-dom'

type PropsType = {
  path: string,
  element: ReactElement,
  children?: ReactElement
}

const GuestRoute: FC<PropsType> = ({path, element, children}) => {
  return <Route path={path} element={element}>{children}</Route>
}

export default GuestRoute