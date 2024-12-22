import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'

function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Route>
        </Routes>
        </>
    )
}
export default App

 
