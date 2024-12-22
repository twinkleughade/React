import { Link, Outlet } from "react-router-dom"

const Navbar=()=>{
    return(
        <>
        <header className="head">
            <h1>header</h1>
            <nav>
                <ul>
                   <li><Link style={{textDecoration:"none",color:"black"}} to="/">Home</Link></li>
                   <li><Link style={{textDecoration:"none",color:"black"}} to="/about">About</Link></li>
                   <li><Link style={{textDecoration:"none",color:"black"}} to="/services">Services</Link></li>
                   <li><Link style={{textDecoration:"none",color:"black"}} to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>

        
        <main>
            <Outlet />
        </main>

        <footer>
            <h2>This is footer</h2>
        </footer>
        </>
    )
}
export default Navbar