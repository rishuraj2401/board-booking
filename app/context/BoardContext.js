"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, createContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from './AuthContext';

export const BoardContext = createContext();

export const BoardContextProvider = ({ children }) => {
//   const { user1 } = useContext(AuthContext)
  const [newuser, setNewUser] = useState();

  return (
    <BoardContext.Provider value={{ newuser, setNewUser }}>
      {children}
    </BoardContext.Provider>
  );
};
