"use client";
import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
    const [billboard, setBillboard] = useState({})
    const [cart, setCart] = useState([])
    const [flag, setFlag] = useState(false)
    const { loading, setLoading } = useContext(AuthContext)
    const [request,setRequest]=useState([])
    const baseUrl = "http://localhost:8000/api/v1";
    const addtoCart = async (boardId) => {
        try {
            setLoading(true)
            const response = await axios.post(`${baseUrl}/cart`, { "billBoardId": boardId },
                {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
            
            setFlag(!flag)
        } catch (error) {
            console.error('Sign up failed:', error);
        }
        setLoading(false)
    }


    const getUserCart = async (userId,query,page) => {
        if (loading) return;
        try {
            setLoading(true)
            const response = await axios.get(`${baseUrl}/cart?userId=${userId}&cartStatus=${query}&page=${page}`,
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
        setLoading(false)
    }

    const getCartRequest = async (page) => {
        if (loading) return;
        try {
            setLoading(true)
            const response = await axios.get(`${baseUrl}/cartrequest`,
                {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }
            );
            setRequest(response.data.data)
            // setFlag(!flag)
            } catch (error) {
            console.error('cart fetching error', error);
        }
        setLoading(false)
    }

    const cartUpdate = async (cartId, updateData) => {
        try {
            setLoading(true)
            const response = await axios.patch(`${baseUrl}/cart/update/${cartId}`, { months: updateData.months, startDate: updateData.startDate, status: updateData.status },
                {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
         
            setFlag(!flag)
        } catch (error) {
            console.error('cart update failed:', error);
        }
        setLoading(false)
    }

    const fetchSingleBoard = async (boardId) => {
        try {
            setLoading(true)
            const response = await axios.get(`${baseUrl}/billboards/${boardId}`);
            setBillboard(response.data.data);
            setFlag(!flag)
            console.log('fetchSingleboard', response.data)
            setLoading(false)
            return response.data
        } catch (error) {
            console.error('Board Fetching failed:', error);
        }
        setLoading(false)
    };
    const handleDeleteCart = async (e, cartId) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axios.delete(`${baseUrl}/cart/${cartId}`,
                {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
            setFlag(!flag)
        } catch (error) {
            console.error('Board deletion failed:', error);
            // Handle error, show error message, etc.
        }
        setLoading(false)
    }
    return (
        <CartContext.Provider value={{
            addtoCart, getUserCart,
            billboard, setBillboard,
            request,setRequest,
            fetchSingleBoard,
            cart, setCart,
            cartUpdate,
            handleDeleteCart,
            flag, setFlag,
            getCartRequest,
        }}>
            {children}
        </CartContext.Provider>
    );
}