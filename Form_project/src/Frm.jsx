import { useState } from "react"

const Frm=()=>{

    let[inputname, setInput]=useState(
        {
            username:'',
            address:'',
            age:'',
            email:'',
            number:''
        }
    )

    const hinput=(event)=>{
        const {name,value}=event.target;
        // console.log(event.target.value)
        setInput(
            {
                ...inputname,
                [name]:value
            }
        )
    }

    const finalsubmit=(event)=>{
        event.preventDefault();
        console.log(inputname)
    }

    return(
        <>        
        <form onSubmit={finalsubmit}>
              <label htmlFor="">Name</label>
              <input type="text" name='username' value={inputname.username} onChange={hinput} /><br /><br /><br />

              <label htmlFor="">Address</label>
              <input type="text" name='address' value={inputname.address} onChange={hinput} /><br /><br />
              
              <label htmlFor="">Age</label>
              <input type="text" name='age' value={inputname.age} onChange={hinput} /><br /><br />

              <label htmlFor="">Email</label>
              <input type="text" name='email' value={inputname.email}  onChange={hinput}/> <br /><br />

              <label htmlFor="">Number</label>
              <input type="text" name='number'  value={inputname.value} onChange={hinput}/> <br /><br />

              <input type="submit" />
        </form>
           
        </>
    )
}
export default Frm