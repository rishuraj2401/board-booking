// BoardForm.js

"use client";
import React, { useState } from 'react';

const BoardForm = () => {
  const [formData, setFormData] = useState({
    boardPhoto: '',
    boardSize: { length: '', breadth: '' },
    country: '',
    state: '',
    city: '',
    pincode: '',
    landmark: '',
    exactLocation: '',
    companyName: '',
    about: '',
    vacantDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For boardSize, check if the field is length or breadth
    if (name === 'length' || name === 'breadth') {
      setFormData((prevData) => ({
        ...prevData,
        boardSize: { ...prevData.boardSize, [name]: value },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send formData to your backend for processing
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      boardPhoto: '',
      boardSize: { length: '', breadth: '' },
      country: '',
      state: '',
      city: '',
      pincode: '',
      landmark: '',
      exactLocation: '',
      companyName: '',
      about: '',
      vacantDate: '',
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Board Form</h2>

        <form onSubmit={handleSubmit}>
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Landmark
              </label>
              <input
                type="text"
                name="length"
                value={formData.landmark}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                placeholder="Country"
                required
              />
            </div>
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City
              </label>
              <input
                type="text"
                name="length"
                value={formData.city}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                placeholder="Country"
                required
              />
            </div>

          </div>
         

        
          <div className="mb-4 flex">
        

            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pincode
              </label>
              <input
                type="text"
                name="breadth"
                value={formData.pincode}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                placeholder="State"
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
                name="length"
                value={formData.country}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                placeholder="Country"
                required
              />
            </div>

            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                State
              </label>
              <input
                type="text"
                name="breadth"
                value={formData.state}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                placeholder="State"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Board Size (Length)
              </label>
              <input
                type="number"
                name="length"
                value={formData.boardSize.length}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                placeholder="Length"
                required
              />
            </div>

            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Board Size (Breadth)
              </label>
              <input
                type="number"
                name="breadth"
                value={formData.boardSize.breadth}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                placeholder="Breadth"
                required
              />
            </div>
          </div>

          {/* Add similar blocks for other fields */}
        
          <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                About the board
              </label>
              <input
                type="text"
                name="about"
                value={formData.about}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                placeholder="Country"
                required
              />
            </div>

            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Board vaccant Date
              </label>
              <input
                type="date"
                name="vacantDate"
                value={formData.vacantDate}
                onChange={handleChange}
                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                // placeholder=""
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Board Photo
            </label>
            <input
              type="text"
              name="boardPhoto"
              value={formData.boardPhoto}
              onChange={handleChange}
              className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
              placeholder="URL of Board Photo"
              required
            />
          </div>



          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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
