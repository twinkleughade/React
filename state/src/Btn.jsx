import React, { useState } from "react";

// function Btn(){
//   let [h, setH] = useState(false)

//   let p=''

  
//     if(h){
//       p=<h1>Time is now</h1>
//     }
//     else{
//       p=''
//     }
  

//   return(
//     <>
//     {/* <button onClick={()=>setH(true)}>show</button> */}
//     <button onClick={()=>setH(!h)}>show</button>
//     {/* <button onClick={()=>setH(false)}>Not show</button> */}
//     {p}
//     </>
//   )
// }

// export default Btn;
function Btn(){
  let[h,setH]=useState(false)
  let p=''

  if(h){
    p=<h1>this is time</h1>
  }
  else{
    p=''
  }
  return(
    <>
    <button onClick={()=>setH(!h)}>show</button>
    {p}
    </>
  )
}
export default Btn