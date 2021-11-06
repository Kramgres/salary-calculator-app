import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'

import {PATHS} from '../../constants/paths'
import stylesLayout from '../../layouts/MainLayout/MainLayout.module.scss'

import styles from './Header.module.scss'


const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={cn(stylesLayout.content, styles.header__content)}>
        <nav className={styles.nav}>
          <NavLink to={PATHS.calculator} className={styles.nav__item}>Калькулятор</NavLink>
        </nav>
        <NavLink to={PATHS.login} className={styles.login}>Войти</NavLink>
      </div>
    </header>
  )
}

export default Header