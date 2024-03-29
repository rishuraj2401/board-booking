"use client";
import Navbar from "../components/Navbar";
import BoardsList from "../components/BoardsSearch";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  return (
    <>
      <>
        <Navbar />
        <div className="max-w-[700px] mx-auto">
          <BoardsList />
        </div>
      </>
    </>
  );
};

export default SearchBar;
