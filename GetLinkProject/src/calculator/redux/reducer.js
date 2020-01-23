import * as actions from './actions';

const INITIAL_CALCULATOR_STATE = {

    result: ""

}

export default calculatorReducer = (state = INITIAL_CALCULATOR_STATE, action) => {
    switch (action.type) {

        case actions.ACTION_UPDATE_RESULT:
            return {
                ...state,
                result: action.payload
            }

        default:
            return state;

    }
}