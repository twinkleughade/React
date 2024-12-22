import { Link, Outlet } from "react-router-dom";

function Name() {
  return (
    <>
      
          <nav>
             <ul>
              <li>
                <Link to='/'>Counter</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>
       <main>
        <Outlet/>
       </main>
    </>
  );
}
export default Name;
