import { Day } from '../type'
import {AppStore} from '../store'

import {SalaryCalculatorState} from './types'

export const getSalaryCalculatorState = (state: AppStore): SalaryCalculatorState => {
  return state.salaryCalculator
}

export const getDaysState = (state: AppStore): Day[] => {
  const userState = getSalaryCalculatorState(state)
  return userState.days
}
