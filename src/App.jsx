import { useState } from "react";

function App(){
  const [count,setCount]= useState("banana");
  const handleFruit =() =>{
    setCount("mango");
  }
  return(
    <div>
  <h1>{count}</h1>
  <button onClick ={handleFruit}>Click me</button>
    </div>
  )
}
export default App;