import React, {FC} from 'react'
import {Button, Form, Input} from 'antd'
import {Link} from 'react-router-dom'
import cn from 'classnames'
import {useDispatch} from 'react-redux'

import logo from 'src/assets/images/sibdev-logo.svg'
import {PATHS} from 'src/constants/paths'
import {RegistrationRequest} from 'src/services/auth/types'

import stylesAuth from '../Auth.module.scss'
import {registerUser} from '../../../services/auth/auth'

import styles from './Registration.module.scss'

const Registration: FC = () => {
  const dispatch = useDispatch()

  const onFinish = async (values: RegistrationRequest) => {
    dispatch(registerUser(values))
  }

  return (
    <div className={stylesAuth.auth}>
      <div className={stylesAuth.auth__container}>
        <div className={stylesAuth.logo}>
          <img src={logo} alt="Logo"/>
        </div>
        <h1 className={stylesAuth.title}>Регистрация</h1>
        <Form
          onFinish={onFinish}
          layout="vertical">
          <Form.Item
            name="email"
            label="Введите Email"
            hasFeedback
            rules={[{required: true, message: 'Введите email'}]}>
            <Input placeholder="Email"/>
          </Form.Item>
          <Form.Item
            name="password"
            label="Введите пароль"
            hasFeedback
            rules={[{required: true, message: 'Введите пароль'}]}>
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
            <Button type="primary" htmlType="submit" className={cn(stylesAuth.button, styles.button)}>Зарегистрироваться</Button>
          </Form.Item>
          <div className={styles.loginLink}>У меня есть аккаунт. <Link to={PATHS.login}>Войти</Link></div>
        </Form>
      </div>
    </div>
  )
}

export default Registration
