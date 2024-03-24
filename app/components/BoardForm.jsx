// BoardForm.js

"use client";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { BoardContext } from "../context/BoardContext";

const BoardForm = () => {
  const { addBoard } = useContext(BoardContext);
  const [image, setImage] = useState(null);
  const [flag, setFlag] = useState(false);
  const [formData, setFormData] = useState({
    boardPhotoUrl: "",
    length: "",
    breadth: "",
    address: {
      country: "",
      state: "",
      city: "",
      pincode: "",
      landmark: "",
    },
    boardvacanDate: "",
  });

  useEffect(() => {
    if (!flag) return;
    addBoard(formData);
    // setFormData({
    //   boardPhotoUrl: "",
    //   length: "",
    //   breadth: "",
    //   address: {
    //     country: "",
    //     state: "",
    //     city: "",
    //     pincode: "",
    //     landmark: "",
    //   },
    //   boardvacanDate: "",
    // });
  }, [flag]);

  const handleImageChange = async (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [child]: value
        }
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadToCloudinary(image);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
    console.log(formData);
  };

  const uploadToCloudinary = async (file) => {
    const imageData = new FormData();
    imageData.append("file", file);
    imageData.append("upload_preset", "dzdedmky");

    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/aababcab/image/upload",
        imageData
      );

      const imageUrl = data.secure_url;
      setFormData((prevState) => ({
        ...prevState,
        boardPhotoUrl: imageUrl,
      }));
      setFlag(!flag);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  return (
    <div className="flex items-center justify-center relative mt-5">
      <div className="bg-white p-8 rounded shadow-lg border w-[30rem]">
        <h2 className="text-2xl font-semibold mb-4">Add your Board</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Landmark
              </label>
              <input
                type="text"
                name="address.landmark"
                value={formData.address.landmark}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City
              </label>
              <input
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex flex-col md:flex-row">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pincode
              </label>
              <input
                type="text"
                name="address.pincode"
                value={formData.address.pincode}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                State
              </label>
              <input
                type="text"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Country
              </label>
              <input
                type="text"
                name="address.country"
                value={formData.address.country}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Board Vacant From
              </label>
              <input
                type="date"
                name="boardvacanDate"
                value={formData.boardvacanDate}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Board Length
              </label>
              <input
                type="number"
                name="length"
                value={formData.length}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500 no-spinner"
                placeholder="Length"
                required
              />
            </div>

            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Board Size
              </label>
              <input
                type="number"
                name="breadth"
                value={formData.breadth}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                placeholder="Breadth"
                required
              />
            </div>
          </div>

          {/* Add similar blocks for other fields */}

          <div className="my-2">
            <div>
              <label
                htmlFor="imageUpload"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Upload Board Image
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

          <button
            className="bg-blue-500 text-white py-2 my-2 px-4 rounded hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BoardForm;
