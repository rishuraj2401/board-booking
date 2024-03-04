"use client";
import Link from 'next/link';
import { useState } from 'react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = () => {
    // Validation logic goes here

    // Assuming you are sending the entire form data to the backend
    // You may want to add additional validation and error handling
    // before sending data to the backend

    const requestBody = {
      ...formData,
    };

    console.log('Sending data to the backend:', requestBody);
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
            name="mobileNumber"
            value={formData.mobileNumber}
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
          onClick={handleSignUp}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>

        {/* Already Signed Up Link */}
        <p className="mt-4 text-gray-600">
          Already have an account?{' '}
          <Link href="#" className="text-blue-500 hover:underline">
            Log In
          </Link> 
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
