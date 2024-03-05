// import Image from "next/image";
"use client";
import { useContext } from "react";
import CitiesBlocks from "./components/CitiesBlocks";
import Home1 from "./components/Home1";

import Navbar from "./components/Navbar";
import { AuthContext, AuthProvider } from "./context/AuthContext";

export default function Home() {
  const {user,setUser}= useContext(AuthContext)
  return (
   <>  
   <Navbar/>
   <div className="px-1 md:px-3 lg:px-[7rem]">
   <CitiesBlocks/>
   </div>
   </>
  );
}
