import {CalculatorActions, CalculatorActionTypes, CalculatorState} from './Calculator.types'

const initialState: CalculatorState = {
  days: []
}

const calculatorReducer = (state = initialState, {type, payload}: CalculatorActions): CalculatorState => {
  switch (type) {
  case CalculatorActionTypes.ADD_NEW_DAY:
    return {...state, days: [...state.days, payload]}
  default:
    return state
  }
}

export default calculatorReducer
