import { useState } from 'react'
import './App.css'

function App() {
  const [bg, setBg] = useState("#000000")
    const turnRed = () =>{
      document.body.style.backgroundColor = "#ff0000";
    };
    const turnBlue = () =>{
      document.body.style.backgroundColor = "#0400ff";
    };
    const turnGreen = () =>{
      document.body.style.backgroundColor = "#00FF00";
    };
  return (
    <div>
    <button onClick={turnRed}>Red</button>
    <button onClick={turnBlue}>Blue</button>
    <button onClick={turnGreen}>Green</button>

    </div>
  )
}

export default App
