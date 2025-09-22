import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuth, handleLogout } = useAuthContext();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-3 flex justify-between items-center">

        <div className="flex items-center space-x-2">
          <i className="fas fa-utensils text-green-600 text-3xl"></i>

          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 tracking-tight">
            DonateHub
          </span>
        </div>


        <button
          className="md:hidden text-2xl text-green-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>

        <ul className="hidden md:flex items-center space-x-5 text-sm sm:text-base md:text-lg font-medium text-green-600 font-['Inter']">
          <li className="relative group">
            <Link to="/" className="hover:text-green-800 transition-colors duration-300">Home</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/about" className="hover:text-green-800 transition-colors duration-300">About</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/service" className="hover:text-green-800 transition-colors duration-300">Services</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/gallery" className="hover:text-green-800 transition-colors duration-300">Gallery</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/contact" className="hover:text-green-800 transition-colors duration-300">Contact</Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </li>

          {!isAuth ? (
            <>
              <li>
                <Link to="/auth/login" className="px-4 py-2 rounded-full border-2 border-green-600 text-green-600   hover:bg-green-600 hover:text-white transition">Sign In</Link>
              </li>
              <li>
                <Link to="/auth/register" className="px-4 py-2 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition">Sign Up</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/donor" className="px-4 py-2 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="px-4 py-2 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition">Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md w-full px-4 pb-4 flex flex-col gap-3">
          <Link to="/" className="text-green-600 font-medium">Home</Link>
          <Link to="/about" className="text-green-600 font-medium">About</Link>
          <Link to="/services" className="text-green-600 font-medium">Services</Link>
          <Link to="/gallery" className="text-green-600 font-medium">Gallery</Link>
          <Link to="/contact" className="text-green-600 font-medium">Contact</Link>
          {!isAuth ? (
            <>
              <Link to="/donlogin" className="px-4 py-2 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition">Sign In</Link>
              <Link to="/signup" className="px-4 py-2 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="px-4 py-2 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition">Dashboard</Link>
              <button onClick={handleLogout} className="px-4 py-2 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
