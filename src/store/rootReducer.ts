import {combineReducers} from 'redux'

import reducer from './salaryCalculator/reducer'

const rootReducer = combineReducers({
  salaryCalculator: reducer
})

export default rootReducer
