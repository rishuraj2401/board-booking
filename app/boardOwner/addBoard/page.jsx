"use client"
import React, { useContext } from 'react';
// import Navbar from '../components/Navbar';
import BoardForm from '../../components/BoardForm';
import Navbar2 from '../../components/Navbar2';
import { AuthContext } from '@/app/context/AuthContext';
import SignInPage from '@/app/components/SignInPage';

const Page = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="navb sticky">
            <Navbar2 />
            </div>
           
           <div className="mainboard " >
            {user?(<>
                <BoardForm/>
            
            </>):(<>
                <SignInPage/>
            </>)}
          
            </div> 
        </div>
    );
}

export default Page;
