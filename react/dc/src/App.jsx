import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [counter, sCounter] = useState(10);

  // const addValue = () => {
  //   setCounter(counter + 1);
  // };

  // const removeValue = () => {
  //   setCounter(counter - 1);
  // };

  // return (
  //   <div>
  //     <h2>Counter: {counter}</h2>

  //     <button onClick={addValue}>Add</button>

  //     <button onClick={removeValue}>Remove</button>
  //   </div>
  // );
//   const [counter, setCounter] =useState(5)
//   const addButton = () =>{
//     setCounter(counter + 1);
//   };
//   const subButton = () =>{
//     setCounter(counter - 1);
//   };
// return (
//   <>
//     <h2> Counter: {counter}</h2>
//     <button onClick = {addButton}>Add</button>
//     <button onClick = {subButton}>Remove</button>
//   </>
// );
  const [Time, setTime] =useState(0);
  const [Running, setRunning] = useState(false);
  useEffect(() =>{
    let intervel;
     if(Running){
      intervel = setInterval(() => {
        setTime(preTime+1)
      }, 1000);
      
    }
    return() => clearInterval(intervel)
  }
)
  const Start = () =>{
    setRunning(true);
  };
  const Stop = () =>{
    setRunning(false);
  };
return (
  <>
    <h2> Time: {}</h2>
    <button onClick = {Start}>Start</button>
    <button onClick = {Stop}>Stop</button>

  </>
);
 
}

export default App;