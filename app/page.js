"use client";
import { useContext } from "react";
import CitiesBlocks from "./components/CitiesBlocks";
import Navbar from "./components/Navbar";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { BoardContext } from "./context/BoardContext";
import Loader from "./components/Loader";

export default function Home() {
  const { newuser } = useContext(BoardContext)
  const {loading} = useContext(AuthContext)
  return (
    <>
      <Navbar />
      {loading?<Loader/>: <div className="px-1 md:px-3 lg:px-[7rem]">
        <CitiesBlocks />
      </div>}
     
    </>
  );
}
