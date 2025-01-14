import React from "react";
function Navbar(){
   
    return(
        <div className="navbar">
            <div className="logo">
                <a href="#">Explore Essence</a>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Signup</a></li>
                <li><a href="#">Login</a></li>    
            </ul>

            <div className='bar'>
                <a href="#"><i class="fa-solid fa-bars"></i></a>
            </div>
        </div>
    )
}
export default Navbar