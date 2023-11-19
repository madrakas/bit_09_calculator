import { Keypad } from './components/keypad/Keypad';
import './App.css';
import { useState } from 'react';
import { OperationPad } from './components/operationpad/OperationPad';


function App() {
  const [p1val, setp1Val]= useState(0);  
  const [p2val, setp2Val]= useState(0);  
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  function ragelis (numeriukas, ki) {
    console.log(ki + ':' + numeriukas );
    if(ki === '1'){
      setp1Val(numeriukas);
      operator === '+' && setResult(numeriukas + p2val);
      operator === '-' && setResult(numeriukas - p2val);
      operator === '*' && setResult(numeriukas * p2val);
      operator === '/' && setResult(numeriukas / p2val);
    }

    if(ki === '2'){
      setp2Val(numeriukas);
      operator === '+' && setResult(p1val + numeriukas);
      operator === '-' && setResult(p1val - numeriukas);
      operator === '*' && setResult(p1val * numeriukas);
      operator === '/' && setResult(p1val / numeriukas);
    }
 

  }

  function opRagelis (btn) {
    setOperator(btn);
    btn === '+' && setResult(p1val + p2val);
    btn === '-' && setResult(p1val - p2val);
    btn === '*' && setResult(p1val * p2val);
    btn === '/' && setResult(p1val / p2val);

  }

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <Keypad telefonas={ragelis} padIndex='1'/>
        </div>
        <div className="col">
          <OperationPad telefonas={opRagelis} />
        </div>
        <div className="col">
          <Keypad telefonas={ragelis} padIndex='2'/>
        </div>
      </div>
      <div class="row">
      <h1>{p1val} {operator} {p2val} = {result}</h1>
      </div>
      
    </div>
  );
}

export default App;
