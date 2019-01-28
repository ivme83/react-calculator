import React from 'react';

import { connect } from "react-redux";
import { addOperand1, setOperator } from "../../state/calc/actions";

import "./CalcKeys.css";

let CalcKeys = (props) => {
    return (
        <div className="calc-keys">
            <div className="buttons" onClick={(e) => props.addOperand1("9")} value="9">9</div>
            <div className="buttons" onClick={(e) => props.addOperand1("8")} value="8">8</div>
            <div className="buttons" onClick={(e) => props.addOperand1("7")} value="7">7</div>
            <div className="buttons" onClick={(e) => props.addOperand1("6")} value="5">5</div>
            <div className="buttons" onClick={(e) => props.addOperand1("5")} value="6">6</div>
            <div className="buttons" onClick={(e) => props.addOperand1("4")} value="4">4</div>
            <div className="buttons" onClick={(e) => props.addOperand1("3")} value="3">3</div>
            <div className="buttons" onClick={(e) => props.addOperand1("2")} value="2">2</div>
            <div className="buttons" onClick={(e) => props.addOperand1("1")} value="1">1</div>
            <div className="buttons" onClick={(e) => props.addOperand1("0")} value="0">0</div>
            <div className="buttons" onClick={(e) => props.setOperator("/")} value="/">/</div>
            <div className="buttons" value="*">*</div>
            <div className="buttons" value="+">+</div>
            <div className="buttons" value="-">-</div>
            <div className="buttons" value=".">.</div>
            <div className="buttons" value="all-clear">AC</div>
            <div className="buttons" value="="> = </div>
        </div>
    );
}
    
function mapDispatchToProps(dispatch){
  return {
    addOperand1(newDigit){
        dispatch(addOperand1(newDigit))
    },
    setOperator(currentOperator){

        dispatch(setOperator(currentOperator))
    },
  }
}

function mapStateToProps(state){
    console.log(state);
    return {
        currentOperator: state.calc.currentOperator,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalcKeys);