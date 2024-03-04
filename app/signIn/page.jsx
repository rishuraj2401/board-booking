import React from 'react';
import Navbar from '../components/Navbar';
import SignInPage from '../components/SignInPage';

const Page = () => {
    return (
        <div>
            <Navbar/>
            <div className="mainsignin">
                <SignInPage/>
            </div>
        </div>
    );
}

export default Page;
