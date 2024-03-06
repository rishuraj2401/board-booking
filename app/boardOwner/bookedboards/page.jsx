import Booked from '@/app/components/Booked';
import Navbar2 from '@/app/components/Navbar2';
// import Navbar1 from '@/app/components/Navbar1';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Navbar2/>
            <div className="">
                <Booked/>
            </div>
        </div>
    );
}

export default Page;
