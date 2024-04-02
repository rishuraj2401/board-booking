"use client";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { BoardContext } from "../context/BoardContext";

const Cart = () => {
  const { user } = useContext(AuthContext)
  const { getUserCart, cart, flag } = useContext(CartContext);
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)



  useEffect(() => {
    // document.getElementById("dateField").setAttribute("min", today);
    if (user) {
      getUserCart(user?._id, query, page)

    }
  }, [user, flag, page]);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1  max-w-[700px]  mx-auto gap-4">
        <div className="sticky top-[60px]  z-10">
          <div className="flex items-center max-w-[700px] my-3 mx-2 sm:mx-auto md:py-2 bg-black rounded border-none overflow-hidden">
            <input
              className="w-full text-white py-2 px-4 outline-none bg-black"
              type="text"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}

            />
            <div className="p-2">
              <button className="text-white bg-black px-2 flex items-center focus:outline-none" onClick={(e) => { e.preventDefault(), getUserCart(user?._id, query, page) }} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1112 0A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                  <path d="M12.293 12.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mx-2 py-2 px-1 md:mx-0 ">My Cart</h1>
        {cart?.map((cartItem) => (
          <CartBoards board={cartItem} key={cartItem._id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
const CartBoards = ({ board }) => {
  const [image, setImage] = useState(null);
  const today = new Date().toISOString().split("T")[0];
  const { fetchSingleBoard, cartUpdate, handleDeleteCart } = useContext(CartContext)
  const [billboard, setBillboard]=useState('');
  const [updateData, setUpdateData] = useState({ months:board.months, startDate:new Date().toDateString, status:board.status })

  useEffect(() => {
    // const today = new Date().toISOString().split("T")[0];
    console.log("this is cartid", board.billBoardId._id);
    fetchSingleBoard(board.billBoardId._id)
    .then((res)=>{if(res?.statusCode===200){
      setBillboard(res.data);
      // setUpdateData({months:res.data.months, startDate:res.data.startDate, status:res.data.status})
    }
    })
  }, [])

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  useEffect(()=>{
    cartUpdate(board._id, updateData);
  },[updateData.status])
  const handlePay = () => {
    console.log("this is data to be updated", updateData);
    setUpdateData((prev) => ({ ...prev, status: "booked" }))

  }
  const handleEmailRequest =async (e) => {
    e.preventDefault();
    setUpdateData((prev) => ({...prev, status: "pending" }))
  }
  return (
    <div
      className="flex relative mx-2 md:mx-0 flex-col md:flex-row lg:flex-row bg-gray-300 rounded-lg overflow-hidden"
    >
      <div className="absolute text-xs font-bold bg-white p-1 rounded-full top-2 left-2">
        {billboard.length} X {billboard.breadth}
      </div>
      <div className="flex-shrink-0 max-h-[3oopx] overflow-hidden">
        <Image
          src={billboard.boardPhotoUrl}
          alt="Billboard"
          width={70}
          height={70}
          objectFit="cover"
          className="w-full h-full lg:w-48"
        />
      </div>
      <div className="p-4 flex flex-col justify-between leading-normal">
        <h5 className="text-gray-900 text-lg">{billboard?.address?.landmark},{billboard.billBoardId}</h5>
        <p className="text-gray-700 text-sm mb-2 font-medium">
          {billboard?.address?.city}, {billboard?.address?.state}, {billboard?.address?.country}
        </p>
        <p className="text-gray-900 font-bold">{billboard.price}</p>

        <div className="text-gray-700 text-sm font-medium my-2 p-[4px] border-2 border-pink-500 rounded-md)" >
          <label htmlFor="months" >Booking Months:</label>{" "}
          <select
            name="months"
            id="months"
            className="bg-gray-300 border p-1 disabled:opacity-50 disabled:cursor-not-allowed"
            value={updateData.months ? updateData.months : board.months}
            onChange={(e) => setUpdateData((prev) => ({ ...prev, months: e.target.value }))}
            disabled={board.status === "cart" || board.status === "cancelled" ? false : true}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className="flex items-center text-sm text-gray-700 mb-2 p-[4px] border-2 border-pink-500 rounded-md font-medium">
          <label htmlFor="startDate" className="mr-1">
            {" "}
            Start Date:
          </label>
          <input
            type="date"
            name="startDate"
            id="dateField"
            className="bg-gray-300 border p-1 disabled:opacity-50 disabled:cursor-not-allowed"
            value={updateData.startDate ? updateData.startDate : board?.startDate}
            onChange={(e) => setUpdateData((prev) => ({ ...prev, startDate: e.target.value }))}
            disabled={board.status === "cart" || board.status === "cancelled" ? false : true}
          />
        </div>

        {board.status == "booked" ? (<>
          <div>
            <label
              htmlFor="imageUpload"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Upload Flex Image
            </label>
            <div className="p-[4px] border-2 border-pink-500 rounded-md">
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-pink-500 hover:file:bg-violet-100"
              />
            </div>
            {image && (
              <div className="mt-4 max-w-[300px]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image Preview
                </label>
                <img src={image} alt="Preview" className="max-h-xs" />
              </div>
            )}
          </div></>) : <></>}
      </div>
      <div className="flex items-end m-2">
        <div className="">
          <button
            type="button"
            className="m-1 p-2 w-full text-sm bg-yellow-800 text-white rounded"
          >
            {board.status}
          </button>
          {board.status !== "booked" && board.status!=="confirm"? (<>
            <button type="button"  onClick={handleEmailRequest}
             className="m-1 p-2 w-full text-sm bg-green-800 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={board.status === "cart" || board.status === "cancelled" ? false : true}
            >Request a Confirmation</button></>) :
            <> <button
              type="button"
              className="m-1 p-2 w-full text-sm bg-green-800 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handlePay}
              disabled={board.status === "confirm" ? false : true}
            >
              Pay & Book
            </button></>}

          <button
            type="button"
            className="m-1 mr-2 p-2 w-full text-sm bg-red-600 text-white rounded"
            onClick={(e) => handleDeleteCart(e, board._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>

  )
}
