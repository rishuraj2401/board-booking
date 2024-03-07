"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar2 = () => {
  const { user } = useContext(AuthContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  //  const [user, setUser]= useState("rishu");
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-950 p-4 sticky top-0 z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="text-white font-semibold text-2xl ">
          <Link href="/boardOwner">BoardOwner</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-white " onClick={toggleMobileMenu}>
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
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/boardOwner/addBoard" className="text-white">
            Add Board
          </Link>

          {user ? (
            <>
              <Link href="/boardOwner/yourBoards" className="text-white">
                Your Boards
              </Link>

              <Link href="/boardOwner/bookedboards" className="text-white">
                Booked Boards
              </Link>

              <select name="profile" id="" className="p-2 rounded">
                <option value="">{user.email}</option>
                <option value="">Logout</option>
              </select>
            </>
          ) : (
            <>
              {" "}
              <Link
                href="/signIn"
                className="text-white bg-blue-600 rounded py-1 px-2"
              >
                Sign In
              </Link>
              <Link
                href="/signUp"
                className="text-white bg-green-500 rounded py-1 px-2"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu - Visible on Small Screens */}
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black">
          <Link
            href="/boardOwner/addBoard"
            className="block py-2 px-4 text-white"
          >
            AddBoard
          </Link>
          <Link
            href="/boardOwner/yourBoards"
            className="block py-2 px-4 text-white"
          >
            YourBoards
          </Link>

          {user ? (
            <>
              <Link
                href="/boardOwner/bookedboards"
                className="block py-2 px-4 text-white"
              >
                BookedBoards
              </Link>

              <select name="profile" id="" className="p-2 rounded">
                <option value="">{user.email}</option>
                <option value=""> Logout</option>
              </select>
            </>
          ) : (
            <>
              <div className="flex gap-2 py-2 px-4">
                <Link
                  href="/signIn"
                  className="block  text-white bg-blue-600 rounded py-1 px-2"
                >
                  Sign In
                </Link>
                <Link
                  href="/signUp"
                  className="block text-white bg-green-500 rounded py-1 px-2"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
