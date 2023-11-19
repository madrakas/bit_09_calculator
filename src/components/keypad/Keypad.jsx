import { useState } from 'react';
import style from './Keypad.module.css';

export function Keypad({telefonas, padIndex}){
    const [blueBtn1, setBlueBtn1] = useState({});
    const [blueBtn2, setBlueBtn2] = useState({});
    const [blueBtn3, setBlueBtn3] = useState({});
    const [blueBtn4, setBlueBtn4] = useState({});
    const [blueBtn5, setBlueBtn5] = useState({});
    const [blueBtn6, setBlueBtn6] = useState({});
    const [blueBtn7, setBlueBtn7] = useState({});
    const [blueBtn8, setBlueBtn8] = useState({});
    const [blueBtn9, setBlueBtn9] = useState({});
    const [blueBtn0, setBlueBtn0] = useState({'backgroundColor': 'lightsalmon'});

    function resetButtons(){
        setBlueBtn1({});
        setBlueBtn2({});
        setBlueBtn3({});
        setBlueBtn4({});
        setBlueBtn5({});
        setBlueBtn6({});
        setBlueBtn7({});
        setBlueBtn8({});
        setBlueBtn9({});
        setBlueBtn0({});
    }
    
    function ClickClick1(){
        resetButtons();
        setBlueBtn1({'backgroundColor': 'lightsalmon'});
        telefonas(1, padIndex);
    }
    function ClickClick2(){
        resetButtons();
        setBlueBtn2({'backgroundColor': 'lightsalmon'});
        telefonas(2, padIndex);
    }
    function ClickClick3(){
        resetButtons();
        setBlueBtn3({'backgroundColor': 'lightsalmon'});
        telefonas(3, padIndex);
    }
    function ClickClick4(){
        resetButtons();
        setBlueBtn4({'backgroundColor': 'lightsalmon'});
        telefonas(4, padIndex);
    }
    function ClickClick5(){
        resetButtons();
        setBlueBtn5({'backgroundColor': 'lightsalmon'});
        telefonas(5, padIndex);
    }
    function ClickClick6(){
        resetButtons();
        setBlueBtn6({'backgroundColor': 'lightsalmon'});
        telefonas(6, padIndex);
    }
    function ClickClick7(){
        resetButtons();
        setBlueBtn7({'backgroundColor': 'lightsalmon'});
        telefonas(7, padIndex);
    }
    function ClickClick8(){
        resetButtons();
        setBlueBtn8({'backgroundColor': 'lightsalmon'});
        telefonas(8, padIndex);
    }
    function ClickClick9(){
        resetButtons();
        setBlueBtn9({'backgroundColor': 'lightsalmon'});
        telefonas(9, padIndex);
    }
    function ClickClick0(){
        resetButtons();
        setBlueBtn0({'backgroundColor': 'lightsalmon'});
        telefonas(0, padIndex);
    }

    return(
        <div className={style.keypad}>
            <div className={style.grid}>
                <button className={style.button1} style={blueBtn7} onClick={ClickClick7}>7</button>
                <button className={style.button2} style={blueBtn8} onClick={ClickClick8}>8</button>
                <button className={style.button3} style={blueBtn9} onClick={ClickClick9}>9</button>
                <button className={style.button4} style={blueBtn4} onClick={ClickClick4}>4</button>
                <button className={style.button5} style={blueBtn5} onClick={ClickClick5}>5</button>
                <button className={style.button6} style={blueBtn6} onClick={ClickClick6}>6</button>
                <button className={style.button7} style={blueBtn1} onClick={ClickClick1}>1</button>
                <button className={style.button8} style={blueBtn2} onClick={ClickClick2}>2</button>
                <button className={style.button9} style={blueBtn3} onClick={ClickClick3}>3</button>
                <button className={style.button0} style={blueBtn0} onClick={ClickClick0}>0</button>
            </div>
        </div>
    );
}