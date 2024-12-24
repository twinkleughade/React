import { useEffect, useState } from "react";
import Color from './Color.jsx'
import Practice from './Practice.jsx'
import Form from './Form.jsx'

function App(){
  let[count, setCount]=useState(0)

  let[tr, setTr]=useState(false)



  // useEffect(()=>{alert("call....!")})                //independent and always run  
  useEffect(()=>{alert("call....!")},[])             //we apply empty dependencut so it can nor run only it runs when page is render 
  // useEffect(()=>{alert("call....!")},[count,tr])       //we apply depemdency with any dependecncy it will run 


  return(
    <>
    <Form/>
    <Practice/>
    <Color/>
   {count} 
   <button onClick={()=>setCount(count+1)}>Inc</button>
   <button onClick={()=>setTr(!tr)}>click</button>
   




    </>
  )
}
export default App