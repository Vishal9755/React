import { useEffect } from "react"
import { useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"

function App() {
const [length,setLength]=useState(8)
const [numberAlowed,setNumberAlowed]=useState(false)
const [charAlow,setCharalow]=useState(false)
const [password,setPassword]=useState("")

const [passwordgen,setPasswordgen]=useState("")


const passwordGenerator=useCallback(()=>{// useCallback is used for store catch data and it can be used any where it can take two argument 1.fn,2-dependencies, when we declare function and dependencies it can be used any; it is the also concept of memoization


  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAlowed) str+= "0123456789"
  if(charAlow) str += "><?:'{}|!@#$%^&*()_+=~"

  for (let i = 1; i <= length; i++) {
    let char=Math.floor(Math.random()*str.length+1)
  pass +=str.charAt(char)// append
  }
setPassword(pass)

},[length,numberAlowed,charAlow])// in this line the value are optimizinging
//useEffect hooks
useEffect(()=>{//it is not only responsible for run function,though this it can be responsible for store, memoize and optimize all the method or value store in cache memory it can be access it
  passwordGenerator()
},[numberAlowed,passwordGenerator,length,charAlow])// all this is are use for any changes or any changes in all this then run again all this 

//useRef hooks
const passwordref=useRef(null)

const copyPasswordToClipboard=useCallback(
  ()=>{
    passwordref.current?.select()// when click on copy button the value are highlighted
    passwordref.current?.setSelectionRange(0, 4)// when click on copy button the value 0to4 value are selected 
    window.navigator.clipboard.writeText(password)
  },[password]
)

  return (
<div>
  <div className="w-full max-w-md mx-auto text-center shadow-md rounded-lg px-4 my-8 text-orange-400"> Password Generators
    <input 
    type="text"
    value={password}
    className="outline-none w-full py-1 px-3 rounded-lg"
    placeholder="Password"
    readOnly
    ref={passwordref}
    
     />
     <button
     onClick={copyPasswordToClipboard}
     className="outline-none bg-blue-400 text-yellow-100 px-3 py-0.5 shrink-0">Copy</button>

     <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        
        onChange={(e)=>{setLength(e.target.value)}}
         />
         <label >Length:{length}</label>
        </div>

        <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="checkbox"        
        defaultChecked={numberAlowed}
        id="numberInput"
        onChange={()=>{setNumberAlowed((prev)=>!prev)}}/>
      <label htmlFor="numberInput">Numbers</label>
     </div>
     </div>
     <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="checkbox"        
        defaultChecked={charAlow}
        id="characterInput"
        onChange={()=>{setCharalow((prev)=>!prev)}}/>
      <label htmlFor="characterInput">Characters</label>
     </div>
     </div>
     </div>
     </div>    
  </div>
   )
}

export default App


//onChange={()=>{setCharalow((prev)=>!prev)}}/> it is used for if we want to previous check box are unslected  means false