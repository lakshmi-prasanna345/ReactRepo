import './App.css';
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const onchange = (e) => {
    setInput(e.target.value);
  };

  const evaluateExpression = (expression) => {
    try {
      // For logical expressions, replace 'AND' with '&&' and 'OR' with '||'
      const evaluableExpression = expression.replace(/AND/g, '&&').replace(/OR/g, '||');
      return eval(evaluableExpression);
    } catch (error) {
      return 'Invalid expression';
    }
  };

  const onclick = () => {
    setResult(evaluateExpression(input));
  };

  return (
    <div className='border'>
      <center>
        <br /><br />
        <h1 className=''>result is: {result.toString()}</h1>
        <input type='text' name='input' placeholder='expression' onChange={onchange} value={input} className='text-danger'/><br/><br/>
        <button type='button' onClick={onclick} className='btn btn-success'>Result</button><br/><br/>
        

        <button onClick={() => setInput(input+'1')} className='btn btn-dark tetx-white m-2'>1</button>
        <button onClick={() => setInput(input+'2')}className='btn btn-dark tetx-white m-2'>2</button>
        <button onClick={() => setInput(input+'3')}className='btn btn-dark tetx-white m-2'>3</button>
        <button onClick={() => setInput(input+'4')}className='btn btn-dark tetx-white m-2'>4</button>
        <button onClick={() => setInput(input+'5')}className='btn btn-dark tetx-white m-2'>5</button><br />
        
        <button onClick={() => setInput(input+'6')}className='btn btn-dark tetx-white m-2'>6</button>
        <button onClick={() => setInput(input+'7')}className='btn btn-dark tetx-white m-2'>7</button>
        <button onClick={() => setInput(input+'8')}className='btn btn-dark tetx-white m-2'>8</button>
        <button onClick={() => setInput(input+'9')}className='btn btn-dark tetx-white m-2'>9</button>
        <button onClick={() => setInput(input+'0')}className='btn btn-dark tetx-white m-2'>0</button><br />

        <button onClick={() => setInput(input+'+')}className='btn btn-dark tetx-white  m-2'>+</button>
        <button onClick={() => setInput(input+'-')}className='btn btn-dark tetx-white m-2 '>-</button>
        <button onClick={() => setInput(input+'*')}className='btn btn-dark tetx-white m-2'>*</button>
        <button onClick={() => setInput(input+'/')}className='btn btn-dark tetx-white m-2'>/</button>
        <button onClick={() => {setInput('');setResult(0)}}className='btn btn-dark tetx-white m-2 '>clr</button><br /> 
      </center>
    </div>
  );
}

export default  Calculator;
