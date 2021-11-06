import React, {FC} from 'react'

import styles from './MainLayout.module.scss'

const MainLayout: FC = ({children}) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default MainLayout