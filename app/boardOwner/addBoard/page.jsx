"use client"
import React, { useContext, useEffect } from 'react';
// import Navbar from '../components/Navbar';
import BoardForm from '../../components/BoardForm';
import Navbar2 from '../../components/Navbar2';
import { AuthContext } from '@/app/context/AuthContext';
import SignInPage from '@/app/components/SignInPage';
import { useRouter } from 'next/navigation';

const Page = () => {
    const {user} = useContext(AuthContext)
    const router= useRouter();
    // useEffect(() => {
    //     // Ensure component is mounted before accessing router
    //     if (router) {
    //       // Your router-related logic here
    //     }
    //   }, [router]);


    return (
        <div>
            <div className="navb sticky">
            <Navbar2 />
            </div>
           
           <div className="mainboard " >
            {user?(<>
                <BoardForm/>
            
            </>):(router.push("/signIn")
                
            )}
          
            </div> 
        </div>
    );
}

export default Page;
