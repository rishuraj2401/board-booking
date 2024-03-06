import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';

const Page = () => {

    return (
        <div>
            <Navbar/>
            <div className="">
                <Cart/>
            </div>
        </div>
    );
}

export default Page;
