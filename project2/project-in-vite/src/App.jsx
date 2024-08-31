import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1 className='bg-green-300 text-black p-4   rounded-xl mb-4'>Tailwind classes</h1>
  <Card username="chai or code" btnText="click me"/>
  <Card username="vishal" />
  {/* <div class="flex flex-row">
    <div>vishal</div>
    <div>soni</div>
  </div> */}

  </>
  )
}

export default App
