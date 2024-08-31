import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProivder from './context/UserContextProvider'
function App() {

  return (
    <UserContextProivder>
      <Login/>
      <br />
      <Profile/>
    </UserContextProivder>
     
    
  )
}

export default App
