"use client";
import axios from 'axios';
import { createContext } from 'react';

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
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
    return (
        <CartContext.Provider value={{ addtoCart }}>
            {children}
        </CartContext.Provider>
    );
}