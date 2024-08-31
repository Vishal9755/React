import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {

  let [counter,setCounter]=useState(0)// in array first is variable and second value function



const addValue=()=>{
 
console.log('Clicked',counter);
if(counter<20)
{setCounter(counter+1)}
}

function remove(){
if(counter>0)
{
  setCounter(counter-1)
}
}
  return (
    <>
    <h1>Projects Starts</h1>
    <h2>CounterValue:{counter}</h2>
   
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={remove}>Remove value</button>
    <p>Footer</p>
    
    
    </>
  )
}

export default App
