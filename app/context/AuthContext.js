"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import { useContext, createContext, useState, useEffect, useRef } from 'react'
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [user1,setUser1]= useState("rihusr fjadfkhadd")
    const [prevRoute, setPrevRoute]=useState("/")
    const [isModalOpen, setModalOpen] = useState(false);
    const baseUrl="http://localhost:3030";
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  const router= useRouter()
  // useEffect(()=>{
  // if(user){
  //   router.back();
  // }
  // },[user])

  // Store the previous route in a ref

  // Update the previous route when the route changes
  

  // Log the current and previous routes
 
    const handleSignUp = async (e,formData) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(`${baseUrl}/users`, formData);
          console.log('Sign up successful:', response.data);
          setUser(response.data);
          if(prevRoute==="/signIn"){
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
      const handleSignIn = async (e,formData) => {
        e.preventDefault();  
      
        
        // router.back();
        try {
          const response = await axios.post(`${baseUrl}/authentication`, formData);
          if(prevRoute==="/signUp"){
            setPrevRoute("/")
            router.back();
          }
          // setUser1(response.data);
          setUser(response.data.user);

          router.back();
          console.log('Sign in successful:'," ", response.data);
          // Handle success, e.g., store user token, redirect to dashboard, etc.
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
                    openModal,closeModal,
                    // user1


                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}
