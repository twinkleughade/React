import { Routes,Route } from "react-router-dom"
import { Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"
import Product from "./Product"
import Navbar from "./Navbar"
import "./App.css"


function App() {

  return (
    <>
    
     <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/product" element={<Product/>} />
      </Route>
      </Routes>
       
    </>
  )
}

export default App
