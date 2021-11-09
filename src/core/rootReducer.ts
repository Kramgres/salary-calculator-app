import {combineReducers} from 'redux'

import salaryCalculatorReducer from '../pages/SalaryCalculator/Calculator.reducer'

const rootReducer = combineReducers({
  calculatorReducer: salaryCalculatorReducer
})

export default rootReducer
