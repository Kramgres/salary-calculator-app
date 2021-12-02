import {AppStore} from '../types'
import { Day } from '../type'

import {SalaryCalculatorState} from './types'

export const getSalaryCalculatorState = (state: AppStore): SalaryCalculatorState => {
  return state.salaryCalculator
}

export const getDaysState = (state: AppStore): Day[] => {
  const userState = getSalaryCalculatorState(state)
  return userState.days
}
