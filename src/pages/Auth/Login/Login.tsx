import React, {FC} from 'react'
import {Button, Form, Input} from 'antd'
import {Link} from 'react-router-dom'
import cn from 'classnames'

import logo from 'src/assets/images/sibdev-logo.svg'
import {PATHS} from 'src/constants/paths'

import stylesAuth from '../Auth.module.scss'

import styles from './Login.module.scss'

const Login: FC = () => {
  return (
    <div className={stylesAuth.auth}>
      <div className={stylesAuth.auth__container}>
        <div className={stylesAuth.logo}>
          <img src={logo} alt="Logo"/>
        </div>
        <h1 className={stylesAuth.title}>Вход</h1>
        <Form
          /*          onFinish={onFinish}*/
          layout="vertical">
          <Form.Item
            name="login"
            label="Введите логин"
            rules={[{required: true, message: 'Введите логин'}]}>
            <Input placeholder="Логин"/>
          </Form.Item>
          <Form.Item
            name="password"
            label="Введите пароль"
            rules={[{required: true, message: 'Введите пароль'}]}>
            <Input.Password placeholder="Пароль"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={cn(styles.button, stylesAuth.button)}>Войти</Button>
          </Form.Item>
          <div className={styles.registrationLink}>У вас нет аккаунта? <Link to={PATHS.registration}>Зарегистрироваться</Link></div>
        </Form>
      </div>
    </div>
  )
}

export default Login
