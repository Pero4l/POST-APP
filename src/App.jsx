import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Registration from './molecules/Registration'
import Login from './molecules/Login'
import Welcome from './molecules/Welcome'
import Landing from './molecules/Landing'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
      <Route path='/landing' element = {<Landing/>} />
      <Route path='/' element = {<Welcome/>} />
      <Route path='/signup' element = {<Registration/>} />
      <Route path='/login' element ={<Login/>} />
    </Routes>

    </>
  )
}

export default App
