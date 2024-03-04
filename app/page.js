// import Image from "next/image";

import CitiesBlocks from "./components/CitiesBlocks";
import Home1 from "./components/Home1";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <>
   <Navbar/>
   <div className="px-1 md:px-3 lg:px-[7rem]">
   <CitiesBlocks/>
   </div>
   </>
  );
}
