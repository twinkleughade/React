import { useState } from "react"

function Form1(){

    let[inp,setInput]=useState({
        username:'',
        password:''
    })

    const hinput=(e)=>{
       const {name,value}=e.target
       setInput({
        ...inp,
        [name]:value
       })
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        if(inp.usernmae=="" || inp.password==""){
            alert("both field are required")
        }
        else{
            localStorage.setItem('userdata', json.stringify(inp))
        }
    }




    return(
        <>
        <form onSubmit={handlesubmit}>
              <label htmlFor="">Name</label>
              <input type="text" name='username' value={inp.username} onChange={hinput} /><br /><br /><br />

              <label htmlFor="">password</label>
              <input type="text" name='password' value={inp.password} onChange={hinput} /><br /><br />            

              <input type="submit" />
        </form>
        </>
    )
}
export default Form1