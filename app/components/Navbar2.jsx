"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Navbar2 = () => {
  const { user } = useContext(AuthContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  // Toggles the state of the dropdown menu
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-red-950 p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="text-white font-semibold text-2xl ">
          <Link href="/boardOwner">
            Booking.com{" "}
            <small className="text-[10px] font-normal">(Board Owners)</small>
          </Link>
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

              {/* for use name display and logout */}
              <div className="relative">
                <div
                  className="flex items-center text-white gap-1 cursor-pointer select-none bg-gray-800 py-1 px-2 rounded-lg"
                  onClick={toggleDropdown}
                >
                  <FaUserCircle className="text-3xl" />
                  <span>{user.name}</span>
                  <FaChevronDown />
                </div>

                {isOpen && (
                  <button className="absolute right-0 my-1 btn btn-error w-48">
                    LogOut
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              {" "}
              <Link href="/signIn" className="btn btn-active btn-primary">
                Sign In
              </Link>
              <Link href="/signUp" className="btn btn-outline btn-secondary">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu - Visible on Small Screens */}
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-red-950">
          <Link
            href="/boardOwner/addBoard"
            className="block py-2 px-4 text-white"
          >
            AddBoard
          </Link>

          {user ? (
            <>
              <Link
                href="/boardOwner/yourBoards"
                className="block py-2 px-4 text-white"
              >
                YourBoards
              </Link>
              <Link
                href="/boardOwner/bookedboards"
                className="block py-2 px-4 text-white"
              >
                BookedBoards
              </Link>

              {/* for use name display and logout */}
              <div className="relative">
                <div
                  className="inline-flex text-white items-center gap-1 cursor-pointer select-none bg-gray-800 py-1 px-2 rounded-lg"
                  onClick={toggleDropdown}
                >
                  <FaUserCircle className="text-3xl" />
                  <span>{user.name}</span>
                  <FaChevronDown />
                </div>

                {isOpen && (
                  <button className="absolute left-0 top-10 my-1 btn py-1 btn-error w-48 z-30">
                    LogOut
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-2 py-2 px-4">
                <Link href="/signIn" className="btn btn-active btn-primary">
                  Sign In
                </Link>
                <Link href="/signUp" className="btn btn-outline btn-secondary">
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
