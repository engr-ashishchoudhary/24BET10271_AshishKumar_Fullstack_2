import { React } from "react";
import useCounter from './hooks/useCounter';

function App() {
    const {count,addElement,removeElement,reset} = useCounter() 

  return (
    <div>
    <button onClick ={addElement}>Add</button>
    <button onClick ={removeElement}>Remove</button>
    <button onClick ={reset}>Reset</button>
    
    </div>

  );
}

export default useCounter;