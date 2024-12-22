import React, { useState } from "react";
function Color(){
  
      let [col, setCol] = useState('yellow');
    
      function rd(){
        setCol('red')
      }
      function orng(){
        setCol('orange')
      }
      function ppl(){
        setCol('purple')
      }
    
      return (
        <>
        <div style={{height:"50vh", width:"50vw", background:col}}>
        <button onClick={rd}>red</button>
        <button onClick={orng}>orange</button>
        <button onClick={ppl}>purple</button>
        </div>
        </>
        
        
      );
    };
    export default Color;