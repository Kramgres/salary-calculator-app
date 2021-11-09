import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'

import Header from '../../components/Header/Header'

import styles from './MainLayout.module.scss'

const MainLayout: FC = () => {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.content}>
        <Header/>
        <main className={styles.main}><Outlet/></main>
      </div>
    </div>
  )
}

export default MainLayout
