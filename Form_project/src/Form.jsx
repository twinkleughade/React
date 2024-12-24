import React from "react";
import { useState } from "react";

const Form = ()=> {

    let [h, setH] =useState('')
    let [s, setS]=useState('')
    let [tr, setTr]=useState(false)
    
    function hinput(event){
     console.log(event.target.value)   
    setH(event.target.value)
    }

    function sinput(event){
        console.log(event.target.value)
        setS(event.target.value)
    }

    function btn(event){
        console.log(event.target.value)
        setTr(event.target.value)
    }


    return(
        <>
        <h1>my name {h} {s}</h1>
        <input type="text" onChange={hinput} />
        <input type="text" onChange={sinput} />
        <button onChange={btn} >Submit {(h) ? tr : ' ' }</button>
        </>
    )
}
export default Form
