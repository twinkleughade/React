import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import Login from "./Login"



const Signup = () => {

    let[status,setStatus] = useState(false)
    let[inputdata,setInp] =useState ({
        "name":'',
        "contact":'',
        "city":'',
        "pwd":'',
        "pwd2":''
    })

    const xinput = (e) =>{
        let{name,value}= e.target;
        console.log(e.target.value);
        setInp({
            ...inputdata,
            [name]:value
        })
    }

    const finalsubmit = (e) =>{
        e.preventDefault();
        console.log(inputdata);
        if(inputdata.name ==="" || inputdata.contact ==="" || inputdata.city ==="" || inputdata.pwd ==="" || inputdata.pwd2 ==="")
        {
            alert("All field are required please fill the feilds")
        }
        else
        {
            alert("SignUp Successfully Done!!")
            localStorage.setItem("data",JSON.stringify(inputdata))
            setStatus(true)
        }
    }

    if(status)
    {
        return <Login/>
    }
    return(
        <>
        <div className="main-box">
        <div className="signup-form">
        <h1>SIGN UP</h1>

        <form onSubmit={finalsubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={inputdata.name} placeholder="Enter your name" onChange={xinput} />
            <label htmlFor="">Contact</label>
            <input type="text" name="contact" value={inputdata.contact} placeholder="Enter your contact no." onChange={xinput} />
            <label htmlFor="">City</label>
            <input type="text" name="city" value={inputdata.city} placeholder="Enter your city" onChange={xinput} />
            <label htmlFor="">Password</label>
            <input type="text" name="pwd" value={inputdata.pwd} placeholder="Enter your password" onChange={xinput} />
            <label htmlFor="">Confirm Password</label>
            <input type="text" name="pwd2" value={inputdata.pwd2} placeholder="Enter confirm password" onChange={xinput} />

            <input type="submit" className="button" />
        </form>
        <h2>You Already SignUp!! <Link to={"/login"}>Login here!</Link></h2>
        </div>
        </div>
        
        </>
    )
}
export default Signup