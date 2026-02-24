import React, { useState } from 'react';

export const CalculatorApp: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num: string) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch (e) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white p-4">
      <div className="flex-1 flex flex-col justify-end items-end mb-4 p-4 bg-gray-800 rounded-xl">
        <div className="text-gray-400 text-sm h-6">{equation}</div>
        <div className="text-5xl font-light truncate w-full text-right">{display}</div>
      </div>
      
      <div className="grid grid-cols-4 gap-2 h-2/3">
        <button onClick={clear} className="bg-gray-700 hover:bg-gray-600 rounded-full text-xl font-medium col-span-2">AC</button>
        <button onClick={() => handleOperator('%')} className="bg-gray-700 hover:bg-gray-600 rounded-full text-xl font-medium">%</button>
        <button onClick={() => handleOperator('/')} className="bg-orange-500 hover:bg-orange-400 rounded-full text-xl font-medium">÷</button>
        
        <button onClick={() => handleNumber('7')} className="bg-gray-800 hover:bg-gray-700 rounded-full text-xl font-medium">7</button>
        <button onClick={() => handleNumber('8')} className="bg-gray-800 hover:bg-gray-700 rounded-full text-xl font-medium">8</button>
        <button onClick={() => handleNumber('9')} className="bg-gray-800 hover:bg-gray-700 rounded-full text-xl font-medium">9</button>
        <button onClick={() => handleOperator('*')} className="bg-orange-500 hover:bg-orange-400 rounded-full text-xl font-medium">×</button>
        
        <button onClick={() => handleNumber('4')} className="bg-gray-800 hover:bg-gray-700 rounded-full text-xl font-medium">4</button>
        <button onClick={() => handleNumber('5')} className="bg-gray-800 hover:bg-gray-700 rounded-full text-xl font-medium">5</button>
        <button onClick={() => handleNumber('6')} className="bg-gray-800 hover:bg-gray-700 rounded-full text-xl font-medium">6</button>
        <button onClick={() => handleOperator('-')} className="bg-orange-500 hover:bg-orange-400 rounded-full text-xl font-medium">−</button>
        
        <button onClick={() => handleNumber('1')} className="bg-gray-800 hover:bg-gray-700 rounded-full text-xl font-medium">1</button>
        <button onClick={() => handleNumber('2')} className="bg-gray-800 hover:bg-gray-700 rounded-full text-xl font-medium">2</button>
        <button onClick={() => handleNumber('3')} className="bg-gray-800 hover:bg-gray-700 rounded-full text-xl font-medium">3</button>
        <button onClick={() => handleOperator('+')} className="bg-orange-500 hover:bg-orange-400 rounded-full text-xl font-medium">+</button>
        
        <button onClick={() => handleNumber('0')} className="bg-gray-800 hover:bg-gray-700 rounded-full text-xl font-medium col-span-2">0</button>
        <button onClick={() => handleNumber('.')} className="bg-gray-800 hover:bg-gray-700 rounded-full text-xl font-medium">.</button>
        <button onClick={calculate} className="bg-orange-500 hover:bg-orange-400 rounded-full text-xl font-medium">=</button>
      </div>
    </div>
  );
};
