import React, {FC} from 'react'
import './App.css'
import {Provider} from 'react-redux'

import {store} from './core/store'
import Router from './router/Router'

const App: FC = () => {
  return (
    <Provider store={store()}>
      <Router/>
    </Provider>
  )
}
export default App
