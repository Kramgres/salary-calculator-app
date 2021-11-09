import {Day} from '../../core/type'

export type SalaryCalculatorState = {
  days: Day[];
}

export enum SalaryCalculatorActionTypes {
  ADD_NEW_DAY = 'ADD_NEW_DAY'
}

export type SalaryCalculatorActions = {type: SalaryCalculatorActionTypes.ADD_NEW_DAY; payload: Day}
