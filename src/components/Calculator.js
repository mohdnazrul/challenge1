// components/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [total, setTotal] = useState(0);

    const handleAddition = () => {
        const result = parseFloat(num1) + parseFloat(num2);
        setTotal(result);
    };

    return (
        <div>
            <h1>Add Two Numbers</h1>
            <div>
                <label>
                    <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}  placeholder="First Number" />
                </label>
            </div>
            <div style={{paddingTop: "10px"}} >
                <label>
                    <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}  placeholder="Second Number" />
                </label>
            </div>
            <div style={{paddingTop: "20px"}} />
            <button onClick={handleAddition}>Add Two Numbers</button>
            <div style={{paddingTop: "10px"}} >
                <strong>Total: {total}</strong>
            </div>
        </div>
    );
};

export default Calculator;
