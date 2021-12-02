import moment, {Moment} from 'moment'

import {timeFormat} from '../../constants/common'

import {SalaryCalculatorActions, SalaryCalculatorActionTypes, SalaryCalculatorState} from './types'

const initialState: SalaryCalculatorState = {
  days: [],
  defaultStartTime: moment('10:00', timeFormat),
  defaultEndTime: moment('18:00', timeFormat),
  defaultCost: 250
}

const calculateResult = (startTime: Moment, endTime: Moment, cost: number): number => {
  const startHours = startTime.hours()
  const startMinutes = startTime.minutes()
  const endHours = endTime.hours()
  const endMinutes = endTime.minutes()

  const workTimeMinutes = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes)
  const costMinute = cost / 60
  return +(workTimeMinutes * costMinute).toFixed(2)
}

let dayId = 1

const reducer = (state = initialState, action: SalaryCalculatorActions): SalaryCalculatorState => {
  switch (action.type) {
  case SalaryCalculatorActionTypes.ADD_NEW_DAY: {
    return {
      ...state,
      days: [
        ...state.days,
        {
          id: dayId++,
          startTime: state.defaultStartTime,
          endTime: state.defaultEndTime,
          cost: state.defaultCost,
          result: calculateResult(state.defaultStartTime, state.defaultEndTime, state.defaultCost)
        }
      ]
    }
  }
  case SalaryCalculatorActionTypes.UPDATE_DAY: {
    const payload = action.payload
    const updatedDays = state.days.map((day) => {
      if (day.id === payload.id) {
        return {
          ...payload,
          result: calculateResult(payload.startTime, payload.endTime, payload.cost)
        }
      }
      return day
    })
    return {
      ...state,
      days: updatedDays,
    }
  }
  case SalaryCalculatorActionTypes.DELETE_DAY: {
    const payload = action.payload
    return {
      ...state,
      days: state.days.filter(day => day.id !== payload)
    }
  }
  case SalaryCalculatorActionTypes.DELETE_ALL_DAYS: {
    return {
      ...state,
      days: []
    }
  }
  default:
    return state
  }
}

export default reducer
