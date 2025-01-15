import React from "react";

const Fetch=()=>{

    const changeinp=(e)=>{
        let{name,value}=e.target;
        setFrminp({...frminp,[name]:value})
    }

    const submitform=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/student',frminp)
        .then(r=>alert("inserted"))
    }

    return(
        <>

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