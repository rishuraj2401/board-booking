import React from 'react';
import Navbar from '../components/Navbar';
import BoardForm from '../components/BoardForm';

const Page = () => {
    return (
        <div>
           <Navbar/>
           <div className="mainboard">
            <BoardForm/>
            </div> 
        </div>
    );
}

export default Page;
