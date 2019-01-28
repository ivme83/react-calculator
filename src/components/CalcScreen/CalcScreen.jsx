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
    console.log(state);
    return {
        currentOperand: state.calc.firstOperand,
    }
}

export default connect(mapStateToProps, null)(CalcScreen);