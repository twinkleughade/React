import React from "react";
import { useState } from "react";

const Second = ()=>{
    let [h, setH]=useState('')
    let[s,setS]=useState('')
   

    function hinput(event){
        console.log(event.target.value)
        setH(event.target.value)
    }

    function sinput(event){
        console.log(event.target.value)
        setS(event.target.value)
    }

    return(
        <>
        {(h) ? <h1>my age was {h} and now {s}</h1> : ""}
        
        <input type="text" onChange={hinput} />
         <button onClick={()=>setH(!h)}>
            {(h) ? "hide":"display"}
         </button> 

        
        </>
    )
}
export default Second