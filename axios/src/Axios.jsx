import axios, { toFormData } from 'axios'
import { useEffect, useState } from 'react'
function Axios() {
    
    let [apidata, setApidata]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res.data);
            setApidata(res.data)
        }),[]})

    return (
      <>
      {/* <ul>
        {apidata.map((e)=>{ return <li>{e.title}</li>})}
      </ul> */}


       <table border="">
        <thead>
            <th>ID</th>
            <th>Title</th>
        </thead>
        <tbody>
            {
                 apidata.map((e)=>{ return
                    <>
                    <tr>
                     <td>{e.id}</td>
                     <td>{e.title}</td>
                     </tr>
                    </> 
                    })
            }
        </tbody>       
       </table>
       
      </>
    )
  }
  
  export default Axios
  