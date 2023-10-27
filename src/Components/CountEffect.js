import React , {useState,useEffect} from "react" ;


function CounterWithTitleEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This side effect updates the document's title
    document.title = `You clicked ${count} times`;

    return () => {
      document.title = 'React App'; 
    };
  }, [count]); // The effect will run whenever 'count' changes
  

  return (

    <center>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </center>
  );
}

export default CounterWithTitleEffect; 








