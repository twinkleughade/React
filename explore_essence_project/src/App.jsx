import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Navbar from './Navbar.jsx'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
         <Route index element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='signup' element={<Signup/>}/>
         <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
