import axios from "axios";
import { useEffect, useState } from "react"
import React from "react";

const Update=()=>{
    let[jsondata,setData]=useState([])

    let[frminp,setFrminp]=useState({
        name:"",
        email:"",
        age:"",
        contact:"",
        city:"",
        guest:"",
        date:""
    })

    const changeinp=(e)=>{
        let{name,value}=e.target;
        setFrminp({...frminp,[name]:value})
    }

    const submitform=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/student',frminp)
        .then(r=>alert("inserted"))
    }

    const mydel=(id)=>{
        axios.delete(`http://localhost:3000/student/${id}`)
        .then(re=>alert("deleted"))
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/student')
        .then(res=>{
            console.log(res.data);
            setData(res.data)
        })
    },[mydel])


    return(
        <>
        <table border="">
           <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>CONTACT</th>
            <th>CITY</th>
            <th>DELETE</th>
           </thead>

           <tbody>
            {
                jsondata.map((e)=>(
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.contact}</td>
                        <td>{e.city}</td>
                        <td><button onClick={()=>mydel(e.id)}>Delete</button></td>
                    </tr>
                ))
            }
           </tbody>
        </table>

        <form onSubmit={submitform}>
            <label htmlFor="name">Name</label>
            <input type="text" value={frminp.name}  name="name" onChange={changeinp}/><br />

            <label htmlFor="age">Age</label>
            <input type="text" value={frminp.age}  name="age" onChange={changeinp}/><br />

            <label htmlFor="contact">Contact</label>
            <input type="text" value={frminp.contact}  name="contact" onChange={changeinp}/><br />

            <label htmlFor="city">City</label>
            <input type="text" value={frminp.city}  name="city" onChange={changeinp}/><br />
            
            <input type="submit" />
        </form>
        </>
    )
}
export default Update