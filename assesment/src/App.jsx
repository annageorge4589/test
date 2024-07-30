import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'


  function App() {
    const [count, setCount] = useState(0)
  let appName="Product Management"


  return (
    <>
     <h1>Welcome {appName} </h1><br/>
      <Navbar/>
      <Routes>
      <Route path='/add'  element={<Add/>}></Route>
      <Route path='/' element={<View/>}></Route>
      </Routes>
    </>
  )
}

export default App