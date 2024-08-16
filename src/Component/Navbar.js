import React, { useState } from 'react';
import img from "../logo.svg";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 text-white shadow-lg">
    <div className="container mx-auto px-7 py-4 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img className="h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-white" src={img} alt="Logo" />
        </Link>
        <Link to="/" className="text-2xl font-bold sm:text-3xl">React</Link>
      </div>
  
      {/* Desktop Menu */}
      <div className="hidden md:flex md:justify-center space-x-12 font-semibold text-lg">
        <Link to="/sign" className="hover:text-yellow-300 transition-colors duration-300">Signup</Link>
        <Link to="/log" className="hover:text-yellow-300 transition-colors duration-300">Login</Link>
        {/* <Link to="/add" className="hover:text-yellow-300 transition-colors duration-300">Add</Link> */}
        <Link to="/ques" className="hover:text-yellow-300 transition-colors duration-300">Interview Questions</Link>
      </div>
  
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? '✖' : '☰'}
      </button>
  
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 w-3/4 max-w-sm bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 text-white p-4 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-6 font-semibold text-lg">
          <Link to="/log" className="hover:text-yellow-300 transition-colors duration-300" onClick={toggleMenu}>Home</Link>
          <Link to="/sign" className="hover:text-yellow-300 transition-colors duration-300" onClick={toggleMenu}>Signup</Link>
          <Link to="/add" className="hover:text-yellow-300 transition-colors duration-300" onClick={toggleMenu}>Add</Link>
          <Link to="/ques" className="hover:text-yellow-300 transition-colors duration-300" onClick={toggleMenu}>Interview Questions</Link>
        </div>
      </div>
    </div>
  </nav>
  
  );
};
