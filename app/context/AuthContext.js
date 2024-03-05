"use client";
import { useContext, createContext, useState } from 'react'
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const handleSignUp = async (e,formData) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('your_backend_api/signup', formData);
          console.log('Sign up successful:', response.data);
          // Handle success, e.g., redirect to login page
        } catch (error) {
          console.error('Sign up failed:', error.response.data);
          // Handle error, show error message, etc.
        }
      };
      const handleSignIn = async (e,formData) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('your_backend_api/signin', formData);
          console.log('Sign in successful:', response.data);
          // Handle success, e.g., store user token, redirect to dashboard, etc.
        } catch (error) {
          console.error('Sign in failed:', error.response.data);
          // Handle error, show error message, etc.
        }
      };

    return (
        <AuthContext.Provider
            value={
                {
                    user, setUser,
                    handleSignIn, handleSignUp

                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}
