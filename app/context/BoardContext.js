"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, createContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from './AuthContext';

export const BoardContext = createContext();

export const BoardContextProvider = ({ children }) => {

  const [boardsList, setBoardsList] = useState([]);
  const [boardData, setBoardData] = useState(null);
  const baseUrl = "http://localhost:8000/api/v1";


  const addBoard = async (formData) => {
    console.log("formdata is recieved", formData);
    try {
      const response = await axios.post(`${baseUrl}/billboards`, formData,
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
          }
        });
      console.log(response.data)
      // Handle success, e.g., redirect to login page
    } catch (error) {
      console.error('Sign up failed:', error);
      // Handle error, show error message, etc.
    }

  };

  const fetchSingleBoard = async (boardId) => {
    try {
      const response = await axios.get(`${baseUrl}/billboards/${boardId}`);
      setBoardData(response.data.data);
    } catch (error) {
      console.error('Board Fetching failed:', error);
      // Handle error, show error message, etc.
    }
  };

  const fetchListofBoard = async () => {
    try {
      const response = await axios.get(`${baseUrl}/billboards`);
      setBoardsList(response.data.data);
    } catch (error) {
      console.error('Boards Fetching failed:', error);
      // Handle error, show error message, etc.
    }
  };
  return (
    <BoardContext.Provider value={{ boardData, setBoardData, fetchSingleBoard, fetchListofBoard, boardsList, setBoardsList, addBoard }}>
      {children}
    </BoardContext.Provider>
  );
};
