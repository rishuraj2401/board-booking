"use client"
import Navbar2 from '@/app/components/Navbar2';
import SignInPage from '@/app/components/SignInPage';
import { AuthContext } from '@/app/context/AuthContext';
import React, { useContext } from 'react';

const Page = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            <Navbar2/>

            {user?(<>
            <SignInPage/></>):(<> </>)}
            <div className="mainlist">
                <h1>your board</h1>
            </div>
        </div>
    );
}

export default Page;
