import { createActions } from 'redux-actions';

export const {
    addToFirstOperand,
    addToSecondOperand,
    setOperator,
    setSolution,
    allClear,
} = createActions({
    ADD_TO_FIRST_OPERAND: (newDigit = "") => ({
        newDigit
    }),
    ADD_TO_SECOND_OPERAND: (newDigit = "") => ({
        newDigit
    }),
    SET_OPERATOR: (currentOperator = "+") => ({
        currentOperator
    }),
    SET_SOLUTION: (solution = "") => ({
        solution
    }),
    ALL_CLEAR: (resetValue = 0) => ({
        resetValue
    }),
});