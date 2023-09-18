import React, { useState } from 'react'

function App() {  
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => changeCounter(counter + 1)}>+</button>
      <button onClick={() => changeCounter(counter - 1)}>-</button>
      {/* <h4>{counter}</h4> */}
    </div>
  );
}

export default App;

