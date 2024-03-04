import React from 'react';
import Navbar from '../components/Navbar';
import SignUpPage from '../components/SignUpPage';

const Page = () => {
    return (
        <div>
            <Navbar/>
            <div className="mainsignup">
                <SignUpPage/>
            </div>
        </div>
    );
}

export default Page;
