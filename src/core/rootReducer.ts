import {combineReducers} from 'redux'

import salaryCalculatorReducer from '../pages/SalaryCalculator/SalaryCalculator.reducer'

const rootReducer = combineReducers({
  calculatorReducer: salaryCalculatorReducer
})

export default rootReducer
