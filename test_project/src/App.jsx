import { useState } from 'react'
import About from './About.jsx'
import './App.css'
import Count from './Count.jsx'
import Name from './Name.jsx'
import { Route,Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Name/>}>
        <Route index element={<Count/>} /> 
        <Route path="/about" element={<About name = "Twinkle" age = "22"/>}/>          
      </Route>
    </Routes>      
    </>
  )
}

export default App
