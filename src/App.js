import React,{useCallback, useState} from "react";
import ChildA from "./component/childA";
const App = () => {

  const [add,setAdd] = useState(0);
  const[count,setCount]= useState(0);

  const learning = useCallback(()=>{

  } ,[count])
  return(
    <div className="App">
      <ChildA learning={learning}count={count}/>
      <h1>learning useCallback</h1>
      <h1>{add}</h1>
      <button onClick={()=>setAdd(add+1)}>Adittion</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+3)}>count</button>

    </div>
  )
}
export  default App;