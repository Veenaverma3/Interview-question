import React, { useState } from 'react';
import img from "../logo.svg";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img className="h-12 w-12 sm:h-16 sm:w-16" src={img} alt="Logo" />
            </Link>
            <Link to="/" className="text-2xl font-bold sm:text-4xl">React</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 font-bold text-lg">
            <Link to="/his" className="hover:underline">History</Link>
            <Link to="/dom" className="hover:underline">Dom</Link>
            <Link to="/vdom" className="hover:underline">Vdom</Link>
            <Link to="/com" className="hover:underline">Component</Link>
            <Link to="/life" className="hover:underline">Lifecycle</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
          >
            {isOpen ? '✖' : '☰'}
          </button>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed top-0 left-0 w-full bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 text-white p-4 transition-transform ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
            <div className="flex flex-col space-y-4 font-bold text-lg">
              <Link to="/his" className="hover:underline" onClick={toggleMenu}>History</Link>
              <Link to="/dom" className="hover:underline" onClick={toggleMenu}>Dom</Link>
              <Link to="/vdom" className="hover:underline" onClick={toggleMenu}>Vdom</Link>
              <Link to="/com" className="hover:underline" onClick={toggleMenu}>Component</Link>
              <Link to="/life" className="hover:underline" onClick={toggleMenu}>Lifecycle</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
