import React from "react"
import Home from './Home.jsx'
import About from './About.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import {Header,Footer} from './Layout'
import { Route, Routes, useLocation } from "react-router-dom"
import './App.css'
import './home.css'
import './about.css'
import './signup.css'
import './login.css'
import './booking.css'
import './table.css'
import Booking from "./Booking.jsx"
import Table from "./Table.jsx"




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
        <Route path="booking" element={<Booking />}/>
        <Route path="/table" element={<Table />}/>

      </Routes>

      {!auth && <Footer/>}
    </>
  )
}

export default App

