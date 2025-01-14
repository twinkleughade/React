import React from "react";
import { Link } from "react-router-dom";


const Header =()=>{
    return(
        <>
        <nav>
            <h1>logo</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>about</Link></li>
                <li><Link to='/signup'>Sign up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
        </>
    )
}

const Footer=()=>{
    return(
        <>
        <h1>Footer</h1>
        </>
    )
}

export {Header, Footer}

