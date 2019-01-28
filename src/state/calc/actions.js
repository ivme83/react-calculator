import { createActions } from 'redux-actions';

export const {
    increment,
    decrement,
    resetAmount,
    addOperand1,
    addOperand2,
    setOperator,
} = createActions({
    INCREMENT: (amount = 1) => ({
        amount
    }),
    DECREMENT: (amount = 1) => ({
        amount: -amount
    }),
    RESET_AMOUNT: (resetAmt = 10) => ({
        resetAmt
    }),
    ADD_OPERAND_1: (newDigit = "") => ({
        newDigit
    }),
    ADD_OPERAND_2: (newDigit = "") => ({
        newDigit
    }),
    SET_OPERATOR: (currentOperator = "+") => ({
        currentOperator
    }),
});