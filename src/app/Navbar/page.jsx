// src/components/Navbar.jsx
'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import Image from 'next/image';
import logo from '../assets/newlogo.jpg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#101125]  fixed top-0 text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center">
            <Link href="/" className=" ">
            <Image className=' w-60'
      src={logo}
    
      alt="Picture of the author"
    />
              
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300 flex items-center">
             Home
            </Link>
            <Link href="About" className="hover:text-gray-300 flex items-center">
             About
            </Link>
            <Link href="Services" className="hover:text-gray-300 flex items-center">
             Services
            </Link>
            <Link href="Contact" className="hover:text-gray-300 flex items-center">
             Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block  px-3 py-2 rounded-md text-center font-medium text-white hover:bg-blue-700">
              Home
            </Link>
            <LInk href="About" className="block px-3 py-2 rounded-md text-center font-medium text-white hover:bg-blue-700">
              About
            </LInk>
            <Link href="Services" className="block px-3 py-2 rounded-md text-center font-medium text-white hover:bg-blue-700">
              Services
            </Link>
            <Link href="Contact" className="block px-3 py-2 rounded-md text-center font-medium text-white hover:bg-blue-700">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
