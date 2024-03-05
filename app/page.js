// import Image from "next/image";
"use client";
import { useContext } from "react";
import CitiesBlocks from "./components/CitiesBlocks";
import Home1 from "./components/Home1";

import Navbar from "./components/Navbar";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { BoardContext } from "./context/BoardContext";

export default function Home() {
  // const {user,setUser}= useContext(AuthContext)
  const {newuser}= useContext(BoardContext)
  return (
   <>  
   <Navbar/>
  
   <div className="px-1 md:px-3 lg:px-[7rem]">
    {/* <h1>this is  {newuser}</h1> */}
   <CitiesBlocks/>
   </div>
   </>
  );
}
