import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Calculator({ verticalAdjustment }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(parseInt(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(parseInt(event.target.value));
  };

  const handleCalculate = () => {
    setResult(num1 + num2);
  };

  return (
    <div style={{ marginTop: verticalAdjustment }}>
      <h2>Calculator</h2>
      <input type="number" value={num1} onChange={handleNum1Change} />
      +
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handleCalculate}>=</button>
      <span>{result}</span>
    </div>
  );
}

function Graph({ verticalAdjustment }) {
  const graphStyle = {
    marginTop: verticalAdjustment,
    width: '200px',
    height: '100px',
    border: '1px solid black',
  };

  return (
    <div style={{ marginTop: verticalAdjustment }}>
      <h2>Graph</h2>
      <div style={graphStyle}>
        {/* Static line graph */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'black', position: 'relative', top: '50%' }}></div>
      </div>
    </div>
  );
}

function App() {
  const [verticalAdjustment, setVerticalAdjustment] = useState(0);

  const handleAdjustmentChange = (event) => {
    setVerticalAdjustment(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <label htmlFor="verticalAdjustment">Vertical Adjustment:</label>
          <input
            type="number"
            id="verticalAdjustment"
            value={verticalAdjustment}
            onChange={handleAdjustmentChange}
          />
        </div>
        <Calculator verticalAdjustment={verticalAdjustment} />
        <Graph verticalAdjustment={verticalAdjustment} />
      </header>
    </div>
  );
}

export default App;
