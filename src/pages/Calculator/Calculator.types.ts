import {Day} from '../../core/type'

export type CalculatorState = {
  days: Day[];
}

export enum CalculatorActionTypes {
  ADD_NEW_DAY = 'ADD_NEW_DAY'
}

export type CalculatorActions = {type: CalculatorActionTypes.ADD_NEW_DAY; payload: Day}