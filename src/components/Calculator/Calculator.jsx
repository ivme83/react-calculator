import React                from 'react';
import "./Calculator.css";
import CalcScreen           from "../CalcScreen/CalcScreen";
import CalcKeys             from '../CalcKeys/CalcKeys';

let Calculator = (props) => {
    return(
        <div className="container">
            <div className="calc-container">
                <CalcScreen />
                <CalcKeys />
            </div>
        </div>
    );
}

export default Calculator;