"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="text-white font-semibold text-2xl ">
          <Link href="/"> booking.com</Link></div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white "
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>


        {/* Right Side - Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link href="/addBoard" className="text-white">Board owners</Link>
          <Link href="/boardsearch" className="text-white">Book a board</Link>
          <Link href="/signIn" className="text-white bg-blue-600 rounded py-1 px-2">Sign In</Link>
          <Link href="/signUp" className="text-white bg-green-500 rounded py-1 px-2">Sign Up</Link>
        </div>

        {/* Mobile Menu - Visible on Small Screens */}

      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black">
          <Link href="/addBoard" className="block py-2 px-4 text-white">Board owners</Link>
          <Link href="/boardsearch" className="block py-2 px-4 text-white">Book a board</Link>
          <div className="flex gap-2 py-2 px-4">
            <Link href="/signIn" className="block  text-white bg-blue-600 rounded py-1 px-2">Sign In</Link>
            <Link href="/signUp" className="block text-white bg-green-500 rounded py-1 px-2">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
