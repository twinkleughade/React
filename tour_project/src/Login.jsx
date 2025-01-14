import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {

    let navigate = useNavigate();
    let [getdata,setData] = useState(null)
    let [status,setStatus] = useState(false)
    let[inputdata,setInp] = useState ({
        "name":"",
        "pwd":""
    })

    const xinput = (e) =>{
        let{name,value} =e.target;
        console.log(e.target.value);
        setInp({
            ...inputdata,
            [name]:value
        })
    }

    const vaildsubmit =(e)=>{
        e.preventDefault();
        console.log(inputdata);
        if(inputdata.name === getdata.name && inputdata.pwd === getdata.pwd)
        {
            alert("Successfully Done!")
            setStatus(true)
        }
        else{
            alert("Data not matched! please verify your input")
        }
    }

    if(status)
        {
           navigate('/')
        }

    useEffect(()=>{
        let getdta = JSON.parse(localStorage.getItem("data"))
        setData(getdta)
    })

    
    return(
        <>
        
        <div className="login-box">
        <div className="login-form">
        <h1>LOGIN</h1>

        <form onSubmit={vaildsubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={inputdata.name} placeholder="Enter your name" onChange={xinput} />
            <label htmlFor="">Password</label>
            <input type="text" name="pwd" value={inputdata.pwd} placeholder="Enter your password" onChange={xinput} />

            <input type="submit" className="button" />
        </form>

        {/* <h1><Link to={"/signup"}>SignUp</Link></h1> */}

        </div>
        </div>
        </>
    )
}
export default Login