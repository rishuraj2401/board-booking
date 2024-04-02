"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, createContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from './AuthContext';

export const BoardContext = createContext();

export const BoardContextProvider = ({ children }) => {

  const [boardsList, setBoardsList] = useState([]);
  const [boardData, setBoardData] = useState(null);
  const [yourBoards, setYourBoards]= useState(null)
  const [city,setCity]=useState('')
  const baseUrl = "http://localhost:8000/api/v1";
  const [flag,setFlag]=useState(false);
  const {loading,setLoading}=useContext(AuthContext)


  const addBoard = async (formData) => {
    console.log("formdata is recieved", formData);
    setLoading(true)
    try {
      const response = await axios.post(`${baseUrl}/billboards`, formData,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
      console.log(response.data)
      setFlag(!flag)
      // Handle success, e.g., redirect to login page
    } catch (error) {
      console.error('Sign up failed:', error);
      // Handle error, show error message, etc.
    }
    setLoading(false)

  };
  const updateBoard = async (formData,id) => {
    console.log("formdata is recieved", formData);
    setLoading(true)
    try {
      const response = await axios.patch(`${baseUrl}/billboards/update/${id}`, formData,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
      console.log(response.data)
      setFlag(!flag)    
    } catch (error) {
      console.error('updation failed', error);
      // Handle error, show error message, etc.
    }
    setLoading(false)
  };
  const deleteBoard = async (e,id) => {
    e.preventDefault();
    console.log("formdata is recieved");
    try {
      setLoading(true)
      
      const response = await axios.delete(`${baseUrl}/billboards/${id}`, 
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });

      setFlag(!flag)
      
      console.log(response.data)
    
    } catch (error) {
      console.error('updation failed', error);
      // Handle error, show error message, etc.
    }
    setLoading(false)

  };

  const fetchSingleBoard = async (boardId) => {
    try {
      setLoading(true)
      const response = await axios.get(`${baseUrl}/billboards/${boardId}`);
      setBoardData(response.data.data);
     

    } catch (error) {
      console.error('Board Fetching failed:', error);
      // Handle error, show error message, etc.
    }
    setLoading(false)
  };

  const fetchListofBoard = async (query, page) => {
    // e.preventDefault()
    if(loading) return ;
    setLoading(true)
    try {
      const response = await axios.get(`${baseUrl}/billboards?page=${page}&query=${query}`);    
      setBoardsList(response.data.data);
      
    } catch (error) {
      console.error('Boards Fetching failed:', error);
      // Handle error, show error message, etc.
    }
    setLoading(false) 
    return ; 
  };
  const fetchYourBoard = async (query,page) => {
    try {
      setLoading(true)
      const response = await axios.get(`${baseUrl}/yourboards?page=${page}&query=${query}`,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      setYourBoards(response.data.data);
     
    } catch (error) {
      console.error('Boards Fetching failed:', error);
      // Handle error, show error message, etc.
    }
    setLoading(false)
  };

  return (
    <BoardContext.Provider value={
      { boardData, setBoardData,
       fetchSingleBoard, fetchListofBoard,
        boardsList, setBoardsList, addBoard,
        fetchYourBoard, setYourBoards,yourBoards,
        updateBoard , deleteBoard,
        flag, setFlag,
        city,setCity
        }}>
      {children}
    </BoardContext.Provider>
  );
};
