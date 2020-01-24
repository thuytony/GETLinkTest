import * as actions from './actions';

const INITIAL_CALCULATOR_STATE = {
  textInput: '',
  previousInput: '',
};

export default calculatorReducer = (state = INITIAL_CALCULATOR_STATE, action) => {
  switch (action.type) {
    case actions.ACTION_HANDLE_INPUT:
      return {
        ...state,
        textInput: action.payload.textInput,
        previousInput: action.payload.previousInput,
      };

    default:
      return state;
  }
};
