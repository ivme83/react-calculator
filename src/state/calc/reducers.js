import {
    handleActions,
}                   from "redux-actions";
import {
    addToFirstOperand,
    addToSecondOperand,
    setOperator,
    setSolution,
}                   from "./actions";
 
const defaultState = {
    counter: 10,
    firstOperand: "",
    secondOperand: "",
    currentOperator: "",
    solution: ""
};
 
const reducer = handleActions(
  {
    [addToFirstOperand]: (
        state,
        { payload: { newDigit }}
    ) => {
        return { ...state, firstOperand: state.firstOperand + newDigit };
    },
    [addToSecondOperand]: (
        state,
        { payload: { newDigit }}
    ) => {
        return { ...state, secondOperand: state.secondOperand + newDigit };
    },
    [setOperator]: (
        state,
        { payload: { currentOperator }}
    ) => {
        return { ...state, currentOperator }
    },
    [setSolution]: (
        state,
        { payload: { solution }}
    ) => {
        return { ...state, solution }
    },
  },
  defaultState
);
 
export default reducer;