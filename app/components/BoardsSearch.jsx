"use client";
import Image from "next/image";
import { useEffect, useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import Link from "next/link";
const BillboardCards = () => {
  const { fetchListofBoard, boardsList } = useContext(BoardContext);
  fetchListofBoard();
  return (
    <div className="container mx-auto py-2">
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
                {billboard.landMark}
              </h5>
              <p className="text-gray-700 text-lg font-medium">
                {billboard.cityOrVillage},{billboard.state},{billboard.country}
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
                    <button type="button" className="m-1 mr-2 p-2 text-sm bg-blue-600 rounded">More Details</button>
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
