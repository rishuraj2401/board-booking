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
  const [loading, setLoading]= useState(false)
  useEffect(() => {
    if (!user) {
      auth().then((res) => {
        setUser(res?.data.user)
      })
      // setLoading(false)
    }
  }, [user])
  const auth = async () => {
    try {
      // setLoading(true)
      const response = await axios.get(`${baseUrl}`, {
        credentials: 'include', // Include cookies in the request
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        }
      });
      // setLoading(false)
      // console.log("initial", response.data);
      return response.data;
    } catch (error) {
      // alert("invalid input")

    }
  };


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
      setLoading(true)
      const response = await axios.post(`${baseUrl}/signup`, formData);

      console.log('Sign up successful:', response.data);
      setUser(response.data);
      setLoading(false)

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
      setLoading(true)

      const response = await axios.post(`${baseUrl}/login`, formData);
      setUser(response.data.data.user);
      setLoading(false)

      if (prevRoute === "/signUp") {
        setPrevRoute("/")
        router.back();
      }
      
      localStorage.setItem("token", response.data.data.accessToken);
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
          loading, setLoading
        }
      }
    >
      {children}
    </AuthContext.Provider>
  )
}
