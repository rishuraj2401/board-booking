"use client"
import React, {  useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Loader = () => {
     const {loading}=useContext(AuthContext)
    return (
           <>
           {loading?
           <section className="sec-loading" >
                <div className="one">
                </div>
            </section> : <></>
            }
            </>
        
    );
}

export default Loader;
