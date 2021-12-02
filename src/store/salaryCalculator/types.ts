import {Moment} from 'moment'

import {Day} from '../type'

export type SalaryCalculatorState = {
  days: Day[];
  defaultStartTime: Moment;
  defaultEndTime: Moment;
  defaultCost: number;
}

export enum SalaryCalculatorActionTypes {
  ADD_NEW_DAY = 'ADD_NEW_DAY',
  UPDATE_DAY = 'UPDATE_DAY',
  DELETE_DAY = 'DELETE_DAY',
  DELETE_ALL_DAYS = 'DELETE_ALL_DAYS'
}

export type SalaryCalculatorActions = {type: SalaryCalculatorActionTypes.ADD_NEW_DAY}
  | {type: SalaryCalculatorActionTypes.UPDATE_DAY; payload: Day}
  | {type: SalaryCalculatorActionTypes.DELETE_DAY; payload: number}
  | {type: SalaryCalculatorActionTypes.DELETE_ALL_DAYS}
