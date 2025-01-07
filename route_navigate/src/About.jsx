import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const About =()=>{
    let {name,age}=useParams()
    console.log(name);

    let nav=useNavigate()

    function contactpage(){
        nav('/contact')
    }
    return(
        <div>
            <h1>This is about page</h1>
            <h1>my name is{name} and my age is {age}</h1>

            <button onClick={contactpage}>Contact us</button>
        </div>
    )
}
export default About