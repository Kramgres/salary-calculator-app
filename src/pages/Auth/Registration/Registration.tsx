import React, {FC, useState} from 'react'
import {Alert, Button, Form, Input} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import cn from 'classnames'
import {useDispatch} from 'react-redux'

import logo from 'src/assets/images/sibdev-logo.svg'
import {PATHS} from 'src/constants/paths'
import {RegistrationRequest} from 'src/services/auth/types'
import {register} from 'src/services/auth/auth'
import {setUserStateAction} from 'src/store/auth/actions'

import stylesAuth from '../Auth.module.scss'

import styles from './Registration.module.scss'

const Registration: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState<null | string>(null)
  const [isLoading, setLoading] = useState(false)

  const onFinish = async (values: RegistrationRequest) => {
    try {
      setError(null)
      setLoading(true)
      const response = await register(values)
      dispatch(setUserStateAction({id: response.user.uid, email: response.user.email}))
      navigate(PATHS.root)
    } catch (error: any) {
      if (error?.code === 'auth/email-already-in-use') {
        setError('Пользователь с таким email уже существует')
      }
      if (error?.code === 'auth/weak-password') {
        setError('Короткий пароль')
      }
      if (error?.code === 'auth/invalid-email') {
        setError('Неверный формат email')
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
        <h1 className={stylesAuth.title}>Регистрация</h1>
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
            label="Введите Email"
            hasFeedback
            rules={[
              {required: true, message: 'Введите email'},
              { type: 'email', message: 'Неверный формат' }
            ]}>
            <Input placeholder="Email"/>
          </Form.Item>
          <Form.Item
            name="password"
            label="Введите пароль"
            hasFeedback
            rules={[
              {required: true, message: 'Введите пароль'},
              {min: 6 , message: 'Пароль должен быть длиннее 6 символов' }
            ]}>
            <Input.Password placeholder="Пароль"/>
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Подтвердите пароль"
            dependencies={['password']}
            hasFeedback
            rules={[
              {required: true, message: 'Подтвердите пароль'},
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Пароли не совпадают!'))
                },
              }),
            ]}>
            <Input.Password placeholder="Подверждение пароля"/>
          </Form.Item>
          <Form.Item>
            <Button loading={isLoading} type="primary" htmlType="submit" className={cn(stylesAuth.button, styles.button)}>Зарегистрироваться</Button>
          </Form.Item>
          <div className={styles.loginLink}>У меня есть аккаунт. <Link to={PATHS.login}>Войти</Link></div>
        </Form>
      </div>
    </div>
  )
}

export default Registration
