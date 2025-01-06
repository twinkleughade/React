import React from "react";
import { useNavigate } from "react-router-dom";
const About =()=>{

    let nav=useNavigate()

    function contactpage(){
        nav('/contact')
    }
    return(
        <div>
            <h1>This is about page</h1>

            <button onClick={contactpage}>Contact us</button>
        </div>
    )
}
export default About