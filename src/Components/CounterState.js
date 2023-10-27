
import React,{useState} from 'react'



function Counter() {
//  initial value is 0
  const [count, setCount] = useState(0);

  return (
    <center>
      <h1>Count: {count}</h1>
      <button style={{margin:3}} onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </center>
  );
}

export default Counter;
