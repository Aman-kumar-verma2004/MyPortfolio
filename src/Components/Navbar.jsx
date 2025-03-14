import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logoNav.png';
import icon from '../assets/right-up.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black py-4 px-8 flex justify-between items-center z-50">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="AKV logo" className="h-10 w-auto cursor-pointer" />
      </Link>

      {/* Desktop Menu */}
      <ul className={`md:flex space-x-6 text-lg items-center ${menuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white py-4 space-y-4' : 'hidden'}`}>
        <li><Link to="/" className="mt-2 hover:text-gray-500 transition" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/Projects" className="mt-2 hover:text-gray-500 transition" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/About" className="mt-2 hover:text-gray-500 transition" onClick={toggleMenu}>About Me</Link></li>
        <li><Link to="/Services" className="mt-2 hover:text-gray-500 transition" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/Blog" className="mt-2 hover:text-gray-500 transition" onClick={toggleMenu}>Blog</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
