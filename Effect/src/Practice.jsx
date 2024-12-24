import { useState, useEffect } from "react";
function Practice(){

    let [count, setCount]=useState(0)
    let[tr, setTr]=useState(false)
    let [color, setColor]=useState('blue')

    useEffect(()=>{alert("called...........")},[])
    return(
        <>
        {count}
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <button onClick={()=>setTr(!tr)}>Dec</button>
        <div style={{width:"400px", height:"400px" ,background:color}}>
           <button onClick={()=>{setColor('pink')}}>pink</button>
           <button onClick={()=>{setColor('black')}}>black</button>
           <button onClick={()=>{setColor('purple')}}>purple</button>
           <button onClick={()=>{setColor('yellow')}}>yellow</button>
        </div>
        </>
    )
}
export default Practice