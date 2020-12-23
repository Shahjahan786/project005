
import { useState } from 'react';
import './App.css';
import CounterContext from './CounterContext';
import Parent from './Parent';

function App() {

  let counterState = useState(1)

  return (
    <CounterContext.Provider value={counterState}>
    <div className="App">
        <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
