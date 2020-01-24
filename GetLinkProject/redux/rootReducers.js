import { combineReducers } from 'redux';

import calculatorReducer from '../src/calculator/redux/reducer';

const rootReducers = combineReducers({
  calculatorReducer,
});

export default rootReducers;
