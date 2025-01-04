import { useRef, useState } from 'react'
import './App.css'

function App() {

  let refel = useRef("")
  console.log(refel)

  let refclr =useRef("")

  function change(){
    refel.current.innerHTML ="Hello"
    refel.current.style.color="red"
    refel.current.style.backgroundColor="orange"
  }

  function clr(){
    refclr.current.style.backgroundColor="purple"
  }

  function back(){
    refclr.current.style.backgroundColor="yellow"
  }
  
  return (
    <>
      
      <h1 ref={refel}>Code with cybrom</h1>
      <button onClick={change}>Click</button> <br /><br />
      <div  onMouseEnter={clr} onMouseLeave={back}  ref={refclr} style={{backgroundColor:"yellow", width:"500px",height:"500px"}}>
      
      </div>

    </>
  )
}

export default App
