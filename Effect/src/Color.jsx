import { useEffect, useState } from "react";
function Color(){
     let [color, setColor]=useState('orange')

     function rd(){
        setColor('red')
     }
  useEffect(()=>{alert("call....!")},[color])       
     
    return(
        <>
        <div style={{height:'200px',width:'200px', background:color}} >
            <button onClick={rd}>red</button>
        </div>
        </>
    )
}
export default Color