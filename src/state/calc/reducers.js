import {
    handleActions,
    combineActions
}                   from "redux-actions";
import {
    increment,
    decrement,
    resetAmount,
    addOperand1,
    addOperand2,
    setOperator,
}                   from "./actions";
 
const defaultState = {
    counter: 10,
    firstOperand: "",
    secondOperand: "",
    currentOperator: "",
};
 
const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
        state,
        { payload: { amount } }
    ) => {
        return { ...state, counter: state.counter + amount };
    },
    [resetAmount]: (
        state,
        { payload: { resetAmt } }
    ) => {
        return { ...state, counter: resetAmt };
    },
    [addOperand1]: (
        state,
        { payload: { newDigit }}
    ) => {
        return { ...state, firstOperand: state.firstOperand + newDigit };
    },
    [addOperand2]: (
        state,
        { payload: { newDigit }}
    ) => {
        return { ...state, firstOperand: state.secondOperand + newDigit };
    },
    [setOperator]: (
        state,
        { payload: { currentOperator }}
    ) => {
        return { ...state, currentOperator }
    },
  },
  defaultState
);
 
export default reducer;