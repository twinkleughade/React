import axios from "axios";

import { useEffect, useState } from "react"

const Table =()=>{
        let[jsondata,setData]=useState([])
      
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
        </>
    )
}
export default Table