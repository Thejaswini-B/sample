import React , {useState} from "react" ;


function Count() {
   const [count,setCount] = useState(0) ; 
   const [name,setName] = useState("")
   const changeHandler = () => {
      setCount(count+1) 
   }

  return (
  <>
  <center>
    <p>Clicked {count} times</p> 
    <button onClick={changeHandler}>click me</button> <br/>
    <p>****************************************</p>
    <input type="text" value = {name} onChange={(e)=>{setName(e.target.value)}} /> 
    <p>Hello {name}</p>

</center>
    
    

  </>
  );
} 


export default  Count  ; 