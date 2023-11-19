import { useState } from 'react';
import style from './OperationPad.module.css';

export function OperationPad({telefonas}){
    const [btnPlus, setBtnPlus] = useState({'backgroundColor': 'lightsalmon'});
    const [btnMin, setBtnMin] = useState({});
    const [btnMult, setBtnMul] = useState({});
    const [btnDiv, setBtnDiv] = useState({});
    
    function resetAllBtn(){
        setBtnPlus({});
        setBtnMin({});
        setBtnMul({});
        setBtnDiv({});
    }

    function btnPlusClick(){
        resetAllBtn();
        setBtnPlus({'backgroundColor': 'lightsalmon'});
        telefonas('+');
    }
    function btnMinClick(){
        resetAllBtn();
        setBtnMin({'backgroundColor': 'lightsalmon'});
        telefonas('-');
    }
    function btnMulClick(){
        resetAllBtn();
        setBtnMul({'backgroundColor': 'lightsalmon'});
        telefonas('*');
    }
    function btnDivClick(){
        resetAllBtn();
        setBtnDiv({'backgroundColor': 'lightsalmon'});
        telefonas('/');
    }

    return(
        <div className={style.OperationPad}>
            <button style={btnPlus}  onClick={btnPlusClick}>+</button>
            <button style={btnMin}  onClick={btnMinClick}>-</button>
            <button style={btnMult}  onClick={btnMulClick}>*</button>
            <button style={btnDiv} onClick={btnDivClick}>/</button>
        </div>
    );

}