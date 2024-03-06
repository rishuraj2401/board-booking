"use client";
import React, { useContext, useEffect } from "react";
import BoardForm from "../../components/BoardForm";
import Navbar2 from "../../components/Navbar2";
import { AuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import SignInPage from "@/app/components/SignInPage";

const Page = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  return (
    <div>
      <div className="navb sticky">
        <Navbar2 />
      </div>
      <div className="mainboard ">
        {user ? (
          <>
            <BoardForm />
          </>
        ) : (
          // router.push("/signIn")
          <SignInPage/>
        )}
      </div>
    </div>
  );
};

export default Page;
