import { useState } from "react";
import Btn from './Btn.jsx'
import Color from './Color.jsx'
import Show from './Show.jsx'
import Theme from './Theme.jsx'

function App() {
  let [count, setCounter] =useState(0)

  function add(){
    setCounter(count+1)
  }

  function del(){
    if(count>=1){
    setCounter(count-1)
  }
  }

  return (
    <>
    <Theme/>
    <Color/>
    <Btn/>
    <Show/>
    <h1>{count}</h1>
    <button onClick={add}>Increment</button>
    <button onClick={del}>Decrement</button>
    
    
    </>
  )
}
export default App
