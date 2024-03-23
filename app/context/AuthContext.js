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
  const baseUrl = "http://localhost:8000/api/v1/users";
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
      const response = await axios.post(`${baseUrl}/signup`, formData);
      console.log('Sign up successful:', response.data);
      setUser(response.data);
      if (prevRoute === "/signIn") {
        console.log("signin");
        setPrevRoute("/")

        router.back();
      }
      router.back();
    } catch (error) {
      console.error('Sign up failed:', error.response.data);
    }

  };


  const handleSignIn = async (e, formData) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/login`, formData);
      if (prevRoute === "/signUp") {
        setPrevRoute("/")
        router.back();
      }
      setUser(response.data.data.user);
      router.back();
      console.log('Sign in successful:', " ", response.data);
      localStorage.setItem("token",response.data.data.accessToken);
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
