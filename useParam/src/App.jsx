import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>} />
          <Route path='/about/:name' element={<About/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
