import React from 'react';
import Navbar from '../components/Navbar';
import Myorders from '../components/Myorders';

const Page = () => {
    return (
        <div>
            <Navbar/>
            <div className="">
                <Myorders/>
            </div>
        </div>
    );
}

export default Page;
