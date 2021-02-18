import {Link} from "react-router-dom"
import {navbar} from "../css/Navbar.module.css"
const Navbar = () => {
  return (
    <nav className={navbar}>   
       <Link to ="/">Home</Link>
       <Link to ="/about">About</Link>     
    </nav>
  );
}
 
export default Navbar;