import "./App.css";
import {useState} from 'react';

function App() {

  const [count,setCount]=useState(0);

  function handleDec(event) {
    if(count<=0){
      return;
    }
    setCount(count-event);
 }

 function handleAdd(event){
   setCount(count+event);
 }



  return (
    <div className="App">
      <h2 data-testid="counter-value">{count}</h2>
      <button data-testid="counter-decrement-button" onClick={()=>handleDec(1)}  >Decrement 1</button> 
      <button data-testid="counter-increment-button" onClick={()=>handleAdd(1)} >Increment 1</button>
    </div>
  );

}

export default App;