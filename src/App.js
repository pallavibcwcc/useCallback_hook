
import './App.css'; 
import React, { useMemo, useState } from 'react';

const App = () => {
  const[add,setAdd]=useState(0);
  const[minus,setMinus]=useState(100);

  const mul = useMemo( function multiply () {
    console.log("***");
    return add*10;
  },[add])

  return (
    <div className='App'>
      <h1>usememo</h1>
      {mul}
      <button onClick={()=>setAdd(add+1)}>Addition</button>
      <span>{add}</span> <br/>

      <button onClick={()=>setMinus(minus-1)}>Subtraction</button>
      <span>{minus}</span>
    </div>
  );
}
export default App ;
