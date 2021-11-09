import React, {FC} from 'react'
import Title from 'antd/lib/typography/Title'
import {Button, DatePicker, Form, Input, Space, TimePicker} from 'antd'
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons'
import moment from 'moment'

import styles from './SalaryCalculator.module.scss'

const format = 'HH:mm'

const SalaryCalculator: FC = () => {
  return (
    <div className={styles.calculator}>
      <Title className={styles.calculator__title}>Калькулятор для рассчёта заработной платы</Title>

      <Form name="dynamic_form_nest_item" autoComplete="off">
        <Form.List name="days">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space key={key} className={styles.days} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'time_start']}
                    fieldKey={[fieldKey, 'time_start']}
                  >
                    <TimePicker.RangePicker defaultValue={[moment('11:00', format), null]} placeholder={['начало', 'завершение']} format={format} size='large' />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Добавить день
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SalaryCalculator
