"use client";
import Image from "next/image";
import React, { useEffect, useContext } from "react";
import Navbar from "@/app/components/Navbar";
import { BoardContext } from "@/app/context/BoardContext";
import { CartContext } from "@/app/context/CartContext";
function BillboardComponent({ params }) {
  // Example billboard data (replace or dynamically fetch as needed)
  const { boardData, fetchSingleBoard } = useContext(BoardContext);
  const { addtoCart } = useContext(CartContext);
  useEffect(() => {
    fetchSingleBoard(params.boardid);
  }, []);

  const handelAddtoCart = () => {
    addtoCart(params.boardid);
  };

  return (
    <>
      <Navbar />
      {!boardData ? (
        <div className="text-center my-2">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold my-1">Billboard Details</h1>
          <div className="flex flex-wrap justify-center items-start">
            <div className="my-2 p-4 border bg-gray-300 rounded-lg overflow-hidden max-w-[380px] max-h-[380px] mx-2">
              <Image
                src={boardData.boardPhotoUrl} // Replace this with your live billboard image URL
                alt="Live Billboard"
                width={380}
                height={380}
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-start items-start p-4 md-py-0 w-[400px] gap-4">
              <div className="p-4 bg-gray-300 rounded-lg w-full">
                <h5 className="text-lg font-semibold">LandMark:</h5>
                <h5>{boardData.landMark}</h5>
              </div>
              <div className="p-4 bg-gray-300 rounded-lg w-full">
                <h5 className="text-lg font-semibold">City / Village:</h5>
                <h5>{boardData.cityOrVillage}</h5>
              </div>
              <div className="p-4 bg-gray-300 rounded-lg w-full">
                <h5 className="text-lg font-semibold">State:</h5>
                <h5>{boardData.state}</h5>
              </div>
              <div className="p-4 bg-gray-300 rounded-lg w-full">
                <h5 className="text-lg font-semibold">Country:</h5>
                <h5>{boardData.country}</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-start">
            <div className="flex flex-col justify-start items-start p-4 w-[400px] gap-4">
              <div className="p-4 bg-gray-300 rounded-lg w-full">
                <h5 className="text-lg font-semibold">Pincode:</h5>
                <h5>{boardData.pincode}</h5>
              </div>
              <div className="p-4 bg-gray-300 rounded-lg w-full">
                <h5 className="text-lg font-semibold">Size:</h5>
                <h5>{boardData.boardSize}</h5>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start p-4 w-[400px] gap-4">
              <div className="p-4 bg-gray-300 rounded-lg w-full">
                <h5 className="text-lg font-semibold">Price:</h5>
                <h5>Rs.{boardData.boardvacanDate} /Month</h5>
              </div>
              <div
                onClick={handelAddtoCart}
                className="p-4 bg-blue-700 rounded-lg w-full"
              >
                <button type="button" className="text-white text-xl py-3 font-bold" onClick={()=>addtoCart(params.boardid)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BillboardComponent;
