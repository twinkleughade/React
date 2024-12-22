import { useState } from "react"
function Count(){
    const [count, setCount] = useState(0)
    
      function add(){
        
          setCount(count+5)
        
      }
    
      function del(){
        if(count>=1){
          setCount(count-1)
        }
      }

      return (
        <> 
          <h1>{count}</h1>
          <button onClick={add}>Increment</button> 
          <button onClick={del}>Decrement</button>
        </>
      )
}
export default Count