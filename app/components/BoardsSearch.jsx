"use client";
import Image from "next/image";
import { useEffect, useContext, useState } from "react";
import { BoardContext } from "../context/BoardContext";
import Link from "next/link";
const BillboardCards = () => {
  const { fetchListofBoard, boardsList,city } = useContext(BoardContext);
  const [query,setQuery]=useState(city)
  const [page,setPage]=useState(1)
  useEffect(()=>{ 
    fetchListofBoard(query,page);
  },[])
  return (
    <div className="container mx-auto py-2">
       <div className="sticky top-[70px] bg-white">
            <div className="flex items-center max-w-[700px] my-3 mx-2 sm:mx-auto md:py-2 bg-black rounded border-none overflow-hidden">
              <input
                className="w-full text-white py-2 px-4 outline-none bg-black"
                type="text"
                placeholder="Search landmark, city, state..."
                onChange={(e)=>setQuery(e.target.value)}
                value={query}
              />
              <div className="p-2">
                <button className="text-white bg-black px-2 flex items-center focus:outline-none"
                onClick={(e)=>{e.preventDefault(),fetchListofBoard(query,page)}}>
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
            <h1 className="text-2xl font-bold mx-2 pb-2 px-1 md:mx-0">
              Available boards
            </h1>
          </div>
      <div className="grid grid-cols-1  max-w-[700px]  mx-auto gap-4">
        {boardsList.map((billboard) => (
          <div
            key={billboard._id}
            className="flex mx-2 md:mx-0 flex-col md:flex-row lg:flex-row bg-gray-300 rounded-lg overflow-hidden"
          >
            <div className="flex-shrink-0">
              <Image
                src={billboard.boardPhotoUrl}
                alt="Billboard"
                width={70}
                height={70}
                objectFit="cover"
                className="w-full h-40 lg:w-48"
              />
            </div>
            <div className="p-4 flex flex-col justify-between leading-normal">
              <h5 className="text-gray-900 font-bold text-xl">
                {billboard.address.landMark}
              </h5>
              <p className="text-gray-700 text-lg font-medium">
                {billboard.address.city},{billboard.address.state},{billboard.address.country}
              </p>
              <p className="text-gray-900 font-bold">{billboard.boardvacanDate}</p>
            </div>
            <div className="flex justify-between w-full relative ">
              <div className=""></div>
              <div className="grid grid-rows-2 " >
                <div className=""></div>
                <div className=" mt-8">
                  {/* <button type="button" className="m-1 p-2 text-sm bg-green-600 rounded" >Update</button> */}
                  <Link href={`/board/${billboard._id}`}   >
                    <button type="button" className="m-1 mr-2 p-2 text-sm text-white bg-blue-600 rounded">More Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillboardCards;
