import {combineReducers} from 'redux'

import salaryCalculatorReducer from './salaryCalculator/reducer'
import authReducer from './auth/reducer'

const rootReducer = combineReducers({
  salaryCalculator: salaryCalculatorReducer,
  auth: authReducer
})

export default rootReducer
