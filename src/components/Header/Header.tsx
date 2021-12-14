import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import {Button} from 'antd'

import {getUserAuthorizedState, getUserInfoState} from 'src/store/auth/getters'
import Logo from 'src/assets/images/sibdev-logo.svg'
import stylesLayout from 'src/layouts/MainLayout/MainLayout.module.scss'
import {PATHS} from 'src/constants/paths'
import {logout} from 'src/services/auth/auth'

import styles from './Header.module.scss'


const Header: FC = () => {
  const isAuthorized = useSelector(getUserAuthorizedState)
  const user = useSelector(getUserInfoState)
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
  }

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
        {isAuthorized ? (
          <>
            <div className={styles.email}>{user?.email}</div>
            <Button onClick={onLogout}>Выйти</Button>
          </>
        ): (
          <NavLink to={PATHS.login} className={styles.login}>Войти</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
