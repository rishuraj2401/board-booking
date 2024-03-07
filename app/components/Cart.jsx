"use client";
import React, { useState } from "react";
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
        <div className="sticky top-[60px] bg-white">
          <h1 className="text-2xl font-bold mx-2 py-2 px-1 md:mx-0">My Cart</h1>
        </div>
        {billboards.map((billboard) => (
          <div
            key={billboard.id}
            className="flex mx-2 md:mx-0 flex-col md:flex-row lg:flex-row bg-gray-300 rounded-lg overflow-hidden"
          >
            <div className="flex-shrink-0">
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
              <h5 className="text-gray-900 text-xl">
                {billboard.landmark}
              </h5>
              <p className="text-gray-700 text-sm font-medium">
                {billboard.location}
              </p>
              <p className="text-gray-900 font-bold">{billboard.price}</p>

              <div className="text-gray-700 font-medium">
                <label htmlFor="">Booking Months:</label>
                <button
                  type="button"
                  className="px-2 m-1 mx-2 rounded bg-gray-400"
                >
                  +
                </button>
                {3}
                <button
                  type="button"
                  className="px-2 m-1 mx-2 rounded bg-gray-400"
                >
                  -
                </button>
              </div>
              <div className="flex my-1 text-gray-700 font-medium">
                <label htmlFor="startDate" className="mr-1">
                  {" "}
                  Start Date:
                </label>
                <input type="date" name="" id="" className=" rounded bg-none" />
              </div>
              <div>
                <label
                  htmlFor="imageUpload"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                />

                {image && (
                  <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Image Preview
                    </label>
                    <img
                      src={image}
                      alt="Preview"
                      className="max-w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between w-full relative ">
              <div className=""></div>
              <div className="grid grid-rows-[80%,20%] ">
                <div className=""></div>
                <div className="">
                  <button
                    type="button"
                    className="m-1 p-2 text-sm bg-green-600 rounded"
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    className="m-1 mr-2 p-2 text-sm bg-red-600 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

