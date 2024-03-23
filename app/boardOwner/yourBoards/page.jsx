"use client";
import Navbar2 from "@/app/components/Navbar2";
import SignInPage from "@/app/components/SignInPage";
import YourBoards from "@/app/components/YourBoards";
import { AuthContext } from "@/app/context/AuthContext";
// import { useRouter } from 'next/navigation';
import React, { useContext } from "react";

const Page = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar2 />
      {!user ? (
        <SignInPage />
      ) : (
        <div className="mainlist max-w-[700px] mx-auto mt-2">
          <h1 className="text-2xl font-bold mx-2 pb-2 px-1 md:mx-0">
            Your boards
          </h1>
          <YourBoards />
        </div>
      )}
    </div>
  );
};

export default Page;
