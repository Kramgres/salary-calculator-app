import React, {FC} from 'react'

import Header from '../../components/Header/Header'

import styles from './MainLayout.module.scss'

const MainLayout: FC = ({children}) => {
  return (
    <div className={styles.content}>
      <Header/>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default MainLayout