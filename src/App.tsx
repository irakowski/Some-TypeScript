import React, { useState } from 'react';
import Counter from "./components/Counter"
import { Articles } from './reducer_ex';


const style: React.CSSProperties = {
  margin: "auto",
  width:"50%",
  textAlign: "center",
}


const App = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter+1)
  }
  const decrement = () => {
    setCounter(counter-1)
  }

  const reset = () => {
    setCounter(0);
  }
  
  return (
    <div className="App" style={style}>
      <h1>Testing out TypeScript</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <Counter counter={counter} reset={reset}/>
      <hr />
      <Articles/>
    </div>
  )
}

export default App;
