import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'

import {PATHS} from '../../constants/paths'
import stylesLayout from '../../layouts/MainLayout/MainLayout.module.scss'
import Logo from '../../assets/images/sibdev-logo.svg'

import styles from './Header.module.scss'


const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={cn(stylesLayout.content, styles.header__content)}>
        <NavLink to={PATHS.root} className={styles.logo}>
          <img src={Logo} alt="Logo"/>
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to={PATHS.calculator}
            className={({isActive}) => cn(styles.nav__item, {[styles.nav__item_active]: isActive})}>Калькулятор</NavLink>
        </nav>
        <NavLink to={PATHS.login} className={styles.login}>Войти</NavLink>
      </div>
    </header>
  )
}

export default Header
