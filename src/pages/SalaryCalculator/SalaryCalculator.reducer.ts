import {SalaryCalculatorActions, SalaryCalculatorActionTypes, SalaryCalculatorState} from './SalaryCalculator.types'

const initialState: SalaryCalculatorState = {
  days: []
}

const salaryCalculatorReducer = (state = initialState, {type, payload}: SalaryCalculatorActions): SalaryCalculatorState => {
  switch (type) {
  case SalaryCalculatorActionTypes.ADD_NEW_DAY:
    return {...state, days: [...state.days, payload]}
  default:
    return state
  }
}

export default salaryCalculatorReducer
