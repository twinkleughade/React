import axios from "axios";
import { useEffect, useState } from "react"
import React from "react";

const Fetch=()=>{
    let[jsondata,setData]=useState([])
    let[frmvisible,setFrmvisible]=useState(false)
    let[editdata, setEditdata]=useState({})


    function hinput(e){
        let{name,value}=e.target;
        setEditdata({...editdata,[name]:value})
    }

    let[frminp,setFrminp]=useState({
        name:"",
        age:"",
        contact:"",
        city:""
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

    function finalsubmit(e){
        e.preventDefault();
        axios.put(`http://localhost:3000/student/${editdata.id}`,editdata)
        .then(r=>alert("updated"))
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
            <th>Edit</th>
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
                        <td><button onClick={()=>{setFrmvisible(true),setEditdata(e)}}>Edit</button></td>
                    </tr>
                ))
            }
           </tbody>
        </table>

        {frmvisible && (
            <form onSubmit={finalsubmit}>
                <label htmlFor="id">ID</label>
                <input type="text" name="id" value={editdata.id} onChange={hinput} /><br /><br />

                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={editdata.name} onChange={hinput} /><br /><br />

                <label htmlFor="age">Age</label>
                <input type="text" name="age" value={editdata.age} onChange={hinput} /><br /><br />

                <label htmlFor="contact">Contact</label>
                <input type="text" name="contact" value={editdata.contact} onChange={hinput} /> <br /><br />

                <label htmlFor="city">City</label>
                <input type="text" name="city" value={editdata.city} onChange={hinput} /><br /><br />

                <input type="submit" />

            </form>
        )}

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
export default Fetch