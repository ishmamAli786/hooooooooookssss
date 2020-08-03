import React,{useState} from 'react';
import './App.css';

let count=1

function App() {
  const state=useState();
  let [count,setCount]=useState(5);
  const IncNum=() =>{
    setCount(count+1);
    console.log("clicked"+count++);
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Me</button>
    </>
  )
}

export default App;
