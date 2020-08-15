import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState()

  return (
    <div className="App">
      <h1>Você clicou {count} vezes</h1>

      <button onClick={() => setCount(count + 1)} className="countClicks">Clica aqui</button>
      <button onClick={() => setCount(count + 2)} className="countClicks2">Clica aqui para somar 2X</button>
      <button onClick={() => setCount(count + 3)} className="countClicks3">Clica aqui para somar 3X</button>
      <button onClick={() => setCount(count + 4)} className="countClicks4">Clica aqui para somar 4X </button>

      <h1>O resultado se somar o {count} + 10</h1>

      <button onClick={() => setTotal( count + 10)} className="somar"> clica aqui para somar</button>

      <p>Total: { total }</p>
    </div>
  );
}

export default App;
