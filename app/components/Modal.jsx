// MyModal.js
"use client";
import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
// import BoardForm from './BoardForm';
import UpdateBoardForm from './UpdateBoardForm';
// Modal.setAppElement('#__next');


const MyModal = ({ isOpen, onRequestClose }) => {
//   const [inputValue, setInputValue] = useState('');
  return (
    <div className="modal ">
    <Modal className="flex items-center justify-center mt-12"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="My Modal"
      style={{
        content: {
        //   width: '', // Adjust the width as needed
        //   height: '', // Adjust the height as needed
        //   top: '', // Center the modal vertically
        //   left: '50%', // Center the modal horizontally
        //   transform: 'translate(-50%,0)', 
        //   backgroundColor:"white",
        },
      }}
    >
    <UpdateBoardForm/>
    </Modal>
    </div>
  );
};

export default MyModal;