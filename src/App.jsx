import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createContext } from "react";
import { Route, Routes } from 'react-router-dom'
import Registration from './molecules/Registration'
import Login from './molecules/Login'
import Welcome from './molecules/Welcome'
import Landing from './molecules/Landing'
import Createpost from './molecules/Createpost';
import Listandkeys from './ListandKeys';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

    <Routes>
    <Route path='/list' element = {<Listandkeys/>} />

      <Route path='/' element = {<Landing/>} />
      <Route path='/welcome' element = {<Welcome/>} />
      <Route path='/signup' element = {<Registration/>} />
      <Route path='/login' element ={<Login/>} />
      <Route path='/createpost' element = {<Createpost/>} />
    </Routes>

    </>
  )
}

export default App
