// BoardForm.js

"use client";
import React, { useContext, useState } from 'react';
// import ImageUpload from './BoardImageUpload';
import { AuthContext } from '../context/AuthContext';
import { BoardContext } from '../context/BoardContext';

const UpdateBoardForm = ({imageId}) => {
    const { closeModal, user } = useContext(AuthContext);
    const { updateBoard } = useContext(BoardContext);
    const [formData, setFormData] = useState({
        boardPhoto: '',
        length: imageId.length,
        breadth: imageId.breadth,
        address: {
            country: imageId.address.country,
            state: imageId.address.state,
            city: imageId.address.city,
            pincode: imageId.address.pincode,
            landmark: imageId.address.landmark,
        },
        companyName: '',
        boardVacanDate: imageId.boardVacanDate,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // For nested objects like address
        if (name.includes('.')) {
            const [parent, child] = name.split('.'); // Split the name into parent and child keys
            setFormData((prevFormData) => ({
                ...prevFormData,
                address: {
                    ...prevFormData.address,
                    [child]: value
                }
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBoard(formData,imageId._id)
        console.log(formData);
        closeModal()
    };

    return (
        <div className="flex items-center justify-center relative mt-5">
            <div className="bg-white p-8 rounded shadow-md w-[30rem] md:w-[25rem]">
                <div className="flex justify-between items-center">
                    <div className=""></div>
                    <button type='button' className="" onClick={closeModal}>X</button>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Board Form</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex">
                        <div className="w-1/2 pr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Landmark
                            </label>
                            <input
                                type="text"
                                name="address.landmark"
                                value={formData.address.landmark}
                                onChange={handleChange}
                                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                                // placeholder="Country"
                                required
                            />
                        </div>
                        <div className="w-1/2 pr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                City
                            </label>
                            <input
                                type="text"
                                name="address.city"
                                value={formData.address.city}
                                onChange={handleChange}
                                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                                // placeholder="Country"
                                required
                            />
                        </div>

                    </div>


                    <div className="mb-4 flex">


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
                                // placeholder="State"
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
                                // placeholder="State"
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
                                // placeholder="Country"
                                required
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Board vacant From
                            </label>
                            <input
                                type="date"
                                name="boardVacanDate"
                                value={formData.boardVacanDate}
                                onChange={handleChange}
                                className="border-b w-full py-2 focus:outline-none focus:border-blue-500"
                                // placeholder=""
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
                                Board Breadth
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

                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        type="submit" onClick={(e)=>{handleSubmit(e)}}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateBoardForm;
