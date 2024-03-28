"use client";
import axios from 'axios';
import { createContext, useState } from 'react';

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
    const [billboard,setBillboard]=useState({}) 
    const [cart, setCart]= useState([])
    const baseUrl = "http://localhost:8000/api/v1";
    const addtoCart = async (boardId) => {
        try {
            const response = await axios.post(`${baseUrl}/cart`, { "billBoardId": boardId },
                {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
            
        } catch (error) {
            console.error('Sign up failed:', error);
        }
    }  


    const getUserCart = async (userId) => {
        try {
            const response = await axios.get(`${baseUrl}/cart?userId=${userId}`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
           
                );
            
                setCart(response.data.data)
               
            
        } catch (error) {
            console.error('cart fetching error', error);
        }
    } 
    
    const fetchSingleBoard = async (boardId) => {
        try {
          const response = await axios.get(`${baseUrl}/billboards/${boardId}`);
          setBillboard(response.data.data);
        } catch (error) {
          console.error('Board Fetching failed:', error);
          // Handle error, show error message, etc.
        }
      };
    return (
        <CartContext.Provider value={{ 
        addtoCart, getUserCart,
        billboard, setBillboard,
        fetchSingleBoard,
        cart, setCart
         }}>
            {children}
        </CartContext.Provider>
    );
}