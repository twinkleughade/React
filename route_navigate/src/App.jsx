import{Route, Routes} from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>} />
          {/* <Route path='about' element={<About/>} /> */}
          <Route path='/about/:name/:age' element={<About/>} />

          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
