import React, {FC} from 'react'
import {Form, InputNumber, TimePicker} from 'antd'
import {MinusCircleOutlined} from '@ant-design/icons'
import {Moment} from 'moment'
import {RangeValue} from 'rc-picker/lib/interface.d'
import {useDispatch} from 'react-redux'

import {deleteDayStateAction, updateDayStateAction} from 'src/store/salaryCalculator/actions'
import {timeFormat} from 'src/constants/common'

import styles from './Day.module.scss'

type Props = {
  id: number,
  startTime: Moment,
  endTime: Moment,
  cost: number
  result?: number
}

const Day: FC<Props> = ({id, startTime, endTime, cost, result}) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.day}>
      <Form.Item
        className={styles.day__time}
      >
        <TimePicker.RangePicker
          placeholder={['начало', 'завершение']}
          format={timeFormat}
          size="large"
          allowClear={false}
          allowEmpty={[false, false]}
          value={[startTime, endTime]}
          onChange={(values: RangeValue<Moment>) => {
            if (values && values[0] && values[1]) {
              dispatch(updateDayStateAction({id: id, startTime: values[0], endTime: values[1], cost: cost}))
            }
          }}
        />
      </Form.Item>
      <div className={styles.day__price}>
        <Form.Item>
          <InputNumber
            value={cost}
            controls={false}
            min={0}
            size="large"
            onChange={(cost: number) => dispatch(updateDayStateAction({id: id, startTime: startTime, endTime: endTime, cost: cost}))}
          />
        </Form.Item>
        <span>руб/ч</span>
      </div>
      <div
        className={styles.day__result}
      >
        {result}
      </div>
      <MinusCircleOutlined className={styles.day__remove} onClick={() => {
        dispatch(deleteDayStateAction(id))
      }}/>
    </div>
  )
}

export default Day
