"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import { useContext, createContext, useState, useEffect, useRef } from 'react'
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [prevRoute, setPrevRoute] = useState("/")
  const [isModalOpen, setModalOpen] = useState(false);
  const baseUrl = "http://localhost:3030";
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const router = useRouter()

  const handleSignUp = async (e, formData) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/users`, formData);
      console.log('Sign up successful:', response.data);
      setUser(response.data);
      if (prevRoute === "/signIn") {
        console.log("signin");
        setPrevRoute("/")

        router.back();
      }
      router.back();
      // Handle success, e.g., redirect to login page
    } catch (error) {
      console.error('Sign up failed:', error.response.data);
      // Handle error, show error message, etc.
    }

  };

  
  const handleSignIn = async (e, formData) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/authentication`, formData);
      if (prevRoute === "/signUp") {
        setPrevRoute("/")
        router.back();
      }
      setUser(response.data.user);
      router.back();
      console.log('Sign in successful:', " ", response.data);
    } catch (error) {
      console.error('Sign in failed:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <AuthContext.Provider
      value={
        {
          user, setUser,
          handleSignIn, handleSignUp,
          prevRoute, setPrevRoute,
          isModalOpen, setModalOpen,
          openModal, closeModal,
        }
      }
    >
      {children}
    </AuthContext.Provider>
  )
}
