import React from "react"
import Home from './Home.jsx'
import About from './About.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import {Header,Footer} from './Layout'
// import Footer from './Footer'
import { Route, Routes, useLocation } from "react-router-dom"


function App() {
  let local = useLocation()

  let auth = local.pathname === '/signup' || local.pathname ==='/login'

  return (
    <>
      {!auth && <Header/>}
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

      {!auth && <Footer/>}
    </>
  )
}

export default App
