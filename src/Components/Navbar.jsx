import {Link} from "react-router-dom"
import logo from "../assets/logoNav.png";
import icon from "../assets/right-up.png"
function Navbar() {
  return (
    
      <nav className="fixed top-0 left-0 w-full bg-white text-black py-4 px-8 flex justify-between items-center z-50">
        
        <ul className="hidden md:flex space-x-6 text-lg items-center">
            <Link to="/"><img src={logo} alt="AKV logo" className="h-10 w-auto cursor-pointer" /></Link>
            <li><Link  to="/" className="mt-2 hover:text-gray-500 transition">Home</Link></li>
            <li><Link to="/Projects" className="mt-2 hover:text-gray-500 transition">Projects</Link></li>
            <li><Link to='/About' className="mt-2 hover:text-gray-500 transition">About Me</Link></li>
            <li><Link to="/Services" className="mt-2 hover:text-gray-500 transition">Services</Link></li>
            <li><Link to="/Blog" className="mt-2 hover:text-gray-500 transition">Blog</Link></li>
            
        </ul>
        <button className="text-black  flex items-center gap-1 underline cursor-pointer">
            Book A Call
            <Link to="/"><img src={icon} alt="arrow icon" className="h-6 w-auto cursor-pointer ml-[-2px]" /></Link>
            
        </button>
      </nav>
    
  )
}

export default Navbar
