import React, {FC} from 'react'
import Title from 'antd/lib/typography/Title'
import {Button, Form} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {PlusOutlined} from '@ant-design/icons'

import {getDaysState} from 'src/store/salaryCalculator/getters'
import {addDayStateAction, deleteAllDaysStateAction} from 'src/store/salaryCalculator/actions'

import styles from './SalaryCalculator.module.scss'
import Day from './Day/Day'

const SalaryCalculator: FC = () => {
  const dispatch = useDispatch()
  const days = useSelector(getDaysState)

  const [form] = Form.useForm()

  return (
    <div className={styles.calculator}>
      <Title className={styles.calculator__title}>Калькулятор для рассчёта заработной платы</Title>
      <Form form={form} name="dynamic_form_nest_item" autoComplete="off">
        <Form.Item>
          <Button
            size='large'
            className={styles.days__button}
            type="dashed"
            onClick={() => dispatch(addDayStateAction())}
            block
            icon={<PlusOutlined/>}
          >
            Добавить день
          </Button>
          <Button size='large' type="default" danger onClick={() => dispatch(deleteAllDaysStateAction())}>
            Очистить
          </Button>
        </Form.Item>
        <div className={styles.daysHeader}>
          <div>
            Время работы
          </div>
          <div>
            Стоимость
          </div>
          <div>
            Заработано
          </div>
          <div>
            Удалить
          </div>
        </div>
        <div className={styles.days}>
          {days.length ? (
            <>
              {days.map(({id, startTime, endTime, cost, result}, index) => (
                <Day key={index} id={id} startTime={startTime} endTime={endTime} cost={cost} result={result} />
              ))}
            </>
          ) : (
            <div className={styles.notFound}>Добавьте новый день!</div>
          )}
        </div>
      </Form>
    </div>
  )
}

export default SalaryCalculator
