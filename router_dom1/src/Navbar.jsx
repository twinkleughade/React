import { Link, Outlet } from "react-router-dom";

function Navbar(){
    return(
        <>
         <header>
            <h1>this is Header</h1>
            <nav>
                <ul>
                    <li><Link style={{color:"blue", margin:"30px"}} to="/">Home</Link></li>
                    <li><Link style={{color:"black", margin:"30px"}} to="/about">About</Link></li>
                </ul>
            </nav>
         </header>

         <main>
            <Outlet/>
         </main>
        </>
    )
}
export default Navbar