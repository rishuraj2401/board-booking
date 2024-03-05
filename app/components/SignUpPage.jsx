"use client";
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const SignUpPage = () => {
  const {handleSignUp, prevRoute, setPrevRoute}= useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    password: '',
    confirmPassword: '',
    mobileNo: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const dont=(e)=>{
e.preventDefault();
setPrevRoute("/signUp")
console.log("dont in sinUp");
  }

  const handleSubmit = (e) => {
    
    // if(!formData.name || !formData.email || formData.password || formData.companyName || formData.confirmPassword || formData.mobileNumber ){
    //   alert("Enter all the fields")
    // }
    // if(formData.password !==formData.confirmPassword){
    //   alert("Confirm password is not matching with password")
    // }
    // else {
      handleSignUp(e, formData);
    // }
    // Validation logic goes here

    // Assuming you are sending the entire form data to the backend
    // You may want to add additional validation and error handling
    // before sending data to the backend

    
    console.log('Sending data to the backend:',formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-b w-full focus:outline-none"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-b w-full focus:outline-none"
          />
        </div>

        {/* Company Name Input */}
        <div className="mb-4">
          <label className="block text-gray-600">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="border-b w-full focus:outline-none"
          />
        </div>
         {/* Mobile Number Input */}
         <div className="mb-4">
          <label className="block text-gray-600">Mobile Number</label>
          <input
            type="text"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            className="border-b w-full focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border-b w-full focus:outline-none"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4">
          <label className="block text-gray-600">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border-b w-full focus:outline-none"
          />
        </div>

       

        {/* Sign Up Button */}
        <button
          onClick={(e)=>handleSubmit(e)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>

        {/* Already Signed Up Link */}
        <p className="mt-4 text-gray-600">
          Already have an account?{' '}
        <button type='button' onClick={dont}> <Link href="/signIn"  className="text-blue-500 hover:underline">   
            Log In
          </Link> </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
