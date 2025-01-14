import {Link, Outlet} from 'react-router-dom'
function Navbar(){
    return(
        <>
           <ul className='navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
           </ul>

           <Outlet/>
        

        </>
    )
}
export default Navbar