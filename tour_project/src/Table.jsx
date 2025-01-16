import axios from "axios";

import { useEffect, useState } from "react"

const Table =()=>{
        let[jsondata,setData]=useState([])
        let[frmvisible,setFrmvisible]=useState(false)
        let[editdata, setEditdata]=useState({})

        function hinput(e){
            let{name,value}=e.target;
            setEditdata({...editdata,[name]:value})
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
    
    return (
        <>
          <table border="" className="table">
           <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>Email</th>
            <th>AGE</th>
            <th>CONTACT</th>
            <th>CITY</th>
            <th>GUEST</th>
            <th>DATE</th>
            <th>DELETE</th>
            <th>EDIT</th>
           </thead>

           <tbody>
            {
                jsondata.map((e)=>(
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.age}</td>
                        <td>{e.contact}</td>
                        <td>{e.city}</td>
                        <td>{e.guest}</td>
                        <td>{e.date}</td>
                        <td><button onClick={()=>mydel(e.id)}>Delete</button></td>
                        <td><button onClick={()=>{setFrmvisible(true),setEditdata(e)}}>Edit</button></td>
                    </tr>
                ))
            }
           </tbody>
        </table>

        {frmvisible && (
            
            <div className="main_edit">
                <form className="edit-form">
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

                <button>Submit</button>

            </form>
            </div>
        )}
        </>
    )
}
export default Table