import React, { useState, ChangeEvent } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddValue = () => {
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      setCount(count + value);
    } else {
      alert('Please enter a valid number');
    }
    setInputValue('');
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <p>Current Count: {count}</p>
        <div>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a number"
          />
          <button onClick={handleAddValue}>Add</button>
        </div>
      </header>
    </div>
  );
}

export default App;
