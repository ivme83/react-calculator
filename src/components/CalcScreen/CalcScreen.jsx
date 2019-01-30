import React from 'react';
import { connect } from "react-redux";
import "./CalcScreen.css";

let CalcScreen = (props) => {
    return (
        <div className="calc-screen">
            {props.currentOperand}
        </div>
    );
}

function mapStateToProps(state){
    const { currentOperator, firstOperand, secondOperand, solution } = state.calc;
    
    if (solution !== "") {
        return { currentOperand: solution };
    } else if (currentOperator === "") {
        return { currentOperand: firstOperand };
    } else {
        return { currentOperand: secondOperand };
    }
}

export default connect(mapStateToProps, null)(CalcScreen);