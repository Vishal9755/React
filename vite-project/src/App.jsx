import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>tailwind</h1>
    
  <div class="flex flex-row">
  <div class="basis-1/4">02</div>
  <div class="basis-1/2">03</div>
</div>
    </>
  )
}

export default App
