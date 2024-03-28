"use client";
import CitiesBlocks from "./components/CitiesBlocks";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-1 md:px-3 lg:px-[7rem] mb-[30px]">
        <CitiesBlocks />
        <h1 className="text-2xl font-semibold my-4 text-center">How Does Billboard Booking Works ? </h1>
        <div className="relative inline ">
          <img className="mask mask-squircle " src="billboard 1.jpg" />
          <div className="absolute top-0 py-2 right-0 bg-gray-800 text-white font-bold px-2 rounded-lg ">
            <p>Step 1- Add a Billbord to your cart.</p>
            <p>Step 2- Request to book billboard from cart.</p>
            <p>Step 3- Owner confirm the booking.</p>
            <p>Step 4- Pay and Book .</p>
            <p>Step 5- Provide image for the flex.</p>
            <p>Step 6- Your money gets transfered to Owner post flex fixing.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
