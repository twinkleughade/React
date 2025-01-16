import React from "react";
import axios from "axios";
import { useEffect, useState } from "react"
const Booking=()=>{
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


    return(
        <>
           <div className="booking-form-container">
           <h2>Book Your Tour</h2>
          <form onSubmit={submitform} className="booking-form">
            <label htmlFor="name">Name</label>
            <input type="text" value={frminp.name} placeholder="Enter your name" name="name" onChange={changeinp}/><br />

            <label htmlFor="email">Email</label>
            <input type="email" value={frminp.email} placeholder="Enter your email" name="email" onChange={changeinp}/><br />


            <label htmlFor="age">Age</label>
            <input type="text" value={frminp.age} placeholder="Enter your age" name="age" onChange={changeinp}/><br />

            <label htmlFor="contact">Contact</label>
            <input type="text" value={frminp.contact} placeholder="Enter your contact"  name="contact" onChange={changeinp}/><br />

            <label htmlFor="city">City</label>
            <input type="text" value={frminp.city} placeholder="Enter your city" name="city" onChange={changeinp}/><br />

            <label htmlFor="guest">Guest</label>
            <input type="text" value={frminp.guest} placeholder="Enter guest number" name="guest" onChange={changeinp}/><br />

            <label htmlFor="date">Date</label>
            <input type="date" value={frminp.date} placeholder="Enter your date" name="date" onChange={changeinp}/><br />
            
            {/* <input type="submit" /> */}
            <button type="submit">Submit Booking</button>
        </form>
        </div>      

        </>
    )
}
export default Booking