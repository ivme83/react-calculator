import React, { Component } from 'react';

import { connect }          from "react-redux";
import {
    addToFirstOperand,
    addToSecondOperand,
    setOperator,
    setSolution,
}                           from "../../state/calc/actions";

import "./CalcKeys.css";

class CalcKeys extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    addToCurrentOperand = (newDigit) => {
        if (this.props.currentOperator === "") {
            this.props.addToFirstOperand(newDigit);
        } else {
            this.props.addToSecondOperand(newDigit);
        }
    }

    setCurrentOperator = (newOperator) => {
        if (this.props.firstOperand !== "") {
            this.props.setOperator(newOperator);
        }
    }

    solveOperation = () => {
        let { firstOperand, secondOperand, currentOperator } = this.props;
        let solution = 0;
        firstOperand = +firstOperand;
        secondOperand = +secondOperand;

        switch(currentOperator) {
            case "*":
                solution = firstOperand * secondOperand;
                break;
            case "/":
                solution = firstOperand / secondOperand;
                break;
            case "+":
                solution = firstOperand + secondOperand;
                break;
            case "-":
                solution = firstOperand - secondOperand;
                break;
            default:
                break;
        };

        this.props.setSolution(solution);
    }

    addDecimal = () => {
        let { firstOperand, secondOperand, currentOperator } = this.props;

        if (currentOperator === "") {
            if(firstOperand.indexOf('.') === -1) {
                this.props.addToFirstOperand(".");
            }
        } else {
            if(secondOperand.indexOf('.') === -1) {
                this.props.addToSecondOperand(".");
            }
        }
    }

    render() {
        return (
            <div className="calc-keys">
                <div className="buttons" onClick={(e) => this.addToCurrentOperand("9")} value="9">9</div>
                <div className="buttons" onClick={(e) => this.addToCurrentOperand("8")} value="8">8</div>
                <div className="buttons" onClick={(e) => this.addToCurrentOperand("7")} value="7">7</div>
                <div className="buttons" onClick={(e) => this.addToCurrentOperand("6")} value="6">6</div>
                <div className="buttons" onClick={(e) => this.addToCurrentOperand("5")} value="5">5</div>
                <div className="buttons" onClick={(e) => this.addToCurrentOperand("4")} value="4">4</div>
                <div className="buttons" onClick={(e) => this.addToCurrentOperand("3")} value="3">3</div>
                <div className="buttons" onClick={(e) => this.addToCurrentOperand("2")} value="2">2</div>
                <div className="buttons" onClick={(e) => this.addToCurrentOperand("1")} value="1">1</div>
                <div className="buttons" onClick={(e) => this.addToCurrentOperand("0")} value="0">0</div>
                <div className="buttons" onClick={(e) => this.setCurrentOperator("/")}  value="/">/</div>
                <div className="buttons" onClick={(e) => this.setCurrentOperator("*")}  value="*">*</div>
                <div className="buttons" onClick={(e) => this.setCurrentOperator("+")}  value="+">+</div>
                <div className="buttons" onClick={(e) => this.setCurrentOperator("-")}  value="-">-</div>
                <div className="buttons" onClick={(e) => this.addDecimal()} value=".">.</div>
                <div className="buttons" value="all-clear">AC</div>
                <div className="buttons" onClick={(e) => this.solveOperation()}         value="="> = </div>
            </div>
        );
    }
}
    
function mapDispatchToProps(dispatch, props){
  return {
    addToFirstOperand(newDigit) {
        dispatch(addToFirstOperand(newDigit));
    },
    addToSecondOperand(newDigit) {
        dispatch(addToSecondOperand(newDigit));
    },
    setOperator(currentOperator) {
        dispatch(setOperator(currentOperator));
    },
    setSolution(solution) {
        dispatch(setSolution(solution));
    },
  }
}

function mapStateToProps(state){
    return {
        firstOperand: state.calc.firstOperand,
        secondOperand: state.calc.secondOperand,
        currentOperator: state.calc.currentOperator,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalcKeys);