import React, {FC} from 'react'
import {Button, Form, Input} from 'antd'

import logo from 'src/assets/images/sibdev-logo.svg'

import styles from './Login.module.scss'

const Login: FC = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo"/>
        </div>
        <h1 className={styles.title}>Вход</h1>
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
            <Button type="primary" htmlType="submit" className={styles.button}>Войти</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
