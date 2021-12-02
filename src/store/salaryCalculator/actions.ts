import { Day } from '../type'

import {SalaryCalculatorActions, SalaryCalculatorActionTypes} from './types'

export const addDayStateAction = (): SalaryCalculatorActions => {
  return {
    type: SalaryCalculatorActionTypes.ADD_NEW_DAY
  }
}

export const updateDayStateAction = (data: Day): SalaryCalculatorActions => {
  return {
    type: SalaryCalculatorActionTypes.UPDATE_DAY,
    payload: data,
  }
}

export const deleteDayStateAction = (id: number): SalaryCalculatorActions => {
  return {
    type: SalaryCalculatorActionTypes.DELETE_DAY,
    payload: id,
  }
}

export const deleteAllDaysStateAction = (): SalaryCalculatorActions => {
  return {
    type: SalaryCalculatorActionTypes.DELETE_ALL_DAYS,
  }
}
