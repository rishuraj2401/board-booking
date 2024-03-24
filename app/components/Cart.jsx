"use client";
import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Cart = () => {
  const [image, setImage] = useState(null);

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

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("dateField").setAttribute("min", today);
  }, []);

  const billboards = [
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      landmark: "Jaydev Bihar",
      location: "Bhubaneswar,odisha,India",
      price: "Rs.10000 /month",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1  max-w-[700px]  mx-auto gap-4">
        <div className="sticky top-[60px]  z-10">
          <h1 className="text-2xl font-bold mx-2 py-2 px-1 md:mx-0 ">My Cart</h1>
        </div>
        {billboards.map((billboard) => (
          <div
            key={billboard.id}
            className="flex relative mx-2 md:mx-0 flex-col md:flex-row lg:flex-row bg-gray-300 rounded-lg overflow-hidden"
          >
            <div className="absolute text-xs font-bold bg-white p-1 rounded-full top-2 left-2">
              30 X 30
            </div>
            <div className="flex-shrink-0 max-h-[3oopx] overflow-hidden">
              <Image
                src={billboard.imageUrl}
                alt="Billboard"
                width={70}
                height={70}
                objectFit="cover"
                className="w-full h-full lg:w-48"
              />
            </div>
            <div className="p-4 flex flex-col justify-between leading-normal">
              <h5 className="text-gray-900 text-lg">{billboard.landmark}</h5>
              <p className="text-gray-700 text-sm mb-2 font-medium">
                {billboard.location}
              </p>
              <p className="text-gray-900 font-bold">{billboard.price}</p>

              <div className="text-gray-700 text-sm font-medium my-2 p-[4px] border-2 border-pink-500 rounded-md">
                <label htmlFor="months">Booking Months:</label>{" "}
                <select
                  name="months"
                  id="months"
                  className="bg-gray-300 border p-1"
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
                  className="bg-gray-300 border p-1"
                />
              </div>
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
              </div>
            </div>
            <div className="flex items-end m-2">
              <div className="">
                <button
                  type="button"
                  className="m-1 p-2 w-full text-sm bg-green-800 text-white rounded"
                >
                  Pay & Book
                </button>
                <button
                  type="button"
                  className="m-1 mr-2 p-2 w-full text-sm bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
