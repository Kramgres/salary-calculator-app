import React, {FC, useState} from 'react'
import {Alert, Button, Form, Input} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import cn from 'classnames'
import {useDispatch} from 'react-redux'

import logo from 'src/assets/images/sibdev-logo.svg'
import {PATHS} from 'src/constants/paths'
import {LoginRequest} from 'src/services/auth/types'
import {login} from 'src/services/auth/auth'
import {setUserStateAction} from 'src/store/auth/actions'

import stylesAuth from '../Auth.module.scss'

import styles from './Login.module.scss'

const Login: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState<null | string>(null)
  const [isLoading, setLoading] = useState(false)

  const onFinish = async (values: LoginRequest) => {
    try {
      setError(null)
      setLoading(true)
      const response = await login(values)
      dispatch(setUserStateAction({id: response.user.uid, email: response.user.email}))
      navigate(PATHS.root)
    } catch (error: any) {
      if (error?.code === 'auth/user-not-found') {
        setError('Пользователь не найден')
      }
      if (error?.code === 'auth/wrong-password') {
        setError('Неправильный пароль')
      }
      if (error?.code === 'auth/too-many-requests') {
        setError('Слишком много попыток, попробуйте позже')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={stylesAuth.auth}>
      <div className={stylesAuth.auth__container}>
        <div className={stylesAuth.logo}>
          <img src={logo} alt="Logo"/>
        </div>
        <h1 className={stylesAuth.title}>Вход</h1>
        {error && (
          <Alert
            className={stylesAuth.error}
            description={error}
            type="error"
          />
        )}
        <Form
          onFinish={onFinish}
          layout="vertical">
          <Form.Item
            name="email"
            label="Введите email"
            rules={[
              {required: true, message: 'Введите логин'},
              { type: 'email', message: 'Неверный формат' }
            ]}>
            <Input placeholder="Логин"/>
          </Form.Item>
          <Form.Item
            name="password"
            label="Введите пароль"
            rules={[{required: true, message: 'Введите пароль'}]}>
            <Input.Password placeholder="Пароль"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={cn(styles.button, stylesAuth.button)} loading={isLoading}>Войти</Button>
          </Form.Item>
          <div className={styles.registrationLink}>У вас нет аккаунта? <Link to={PATHS.registration}>Зарегистрироваться</Link></div>
        </Form>
      </div>
    </div>
  )
}

export default Login
