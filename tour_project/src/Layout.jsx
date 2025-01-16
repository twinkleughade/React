import React from "react";
import { Link } from "react-router-dom";


const Header =()=>{
    return(
        <>
        <div className="navbar">
            <div className="logo">
                <img src="logo.png" alt="" />
            </div>
            <ul>
            <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/signup'>Sign up</Link></li>
                <li><Link to='/login'>Login</Link></li> 
                <li><Link to='/table'>Detail</Link></li> 
            </ul>

            <div className='bar'>
                <a href="#"><i className="fa-solid fa-bars"></i></a>
            </div>
        </div>
        </>
    )
}

const Footer=()=>{
    return(
        <>
        <footer>
            <article className="flogo">
              <img src="logo.png" alt="" />
            </article>
            
            <article className="follow">
              <div>Follow us :</div>
              <div><a href="https://www.Linkedin.com/twinklethakre"><i className="fa-brands fa-linkedin"></i></a>Linkedin</div>
                <div><a href="https://www.Facebook.com/tinklethakre"><i className="fa-brands fa-facebook"></i></a>Facebook</div>
                <div><a href="https://www.Whatsapp.com/6267002715"><i className="fa-brands fa-whatsapp"></i></a>Whatsapp</div>
                <div><a href="https://www.instagram.com/twinklethakre"><i className="fa-brands fa-instagram"></i></a>Instagram</div>
            </article>
            
            <article className="address">
              <div>Address : tulip 145 signature 360 Katara hills bhopal</div>
              <div><a href="#">Contact : 9213456789</a></div>
              <div><a href="#"> Email : twinklethakre1998@gmail.com</a></div>
            </article>
            </footer>
            
        
        </>
    )
}

export {Header, Footer}

