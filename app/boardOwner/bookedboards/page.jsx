"use client";
import Navbar2 from '@/app/components/Navbar2';
import { CartContext } from '@/app/context/CartContext';
import React, { useContext, useEffect, useState } from 'react';

const Page = () => {
    const {getBookedBoards,request, setRequest,flag}=useContext(CartContext);
    const [page,setPage]=useState(1)
    useEffect(()=>{
        getBookedBoards(page);
    },[])
    return (
        <div>
            <Navbar2/>
            {request?.map((req)=><>
            <Card key= {req?._id} board={req}/>
            </>)}
            
        </div>
    );
}

export default Page;

const Card =({board})=>{
    const { fetchSingleBoard, cartUpdate } = useContext(CartContext)
  const [billboard, setBillboard]=useState('');
  const [updateData, setUpdateData] = useState({ months:board.months, startDate:board.startDate, status:board.status })
  useEffect(() => {
    console.log("this is cartid", board.billBoardId);
    fetchSingleBoard(board.billBoardId)
    .then((res)=>{if(res.statusCode===200){
      setBillboard(res.data);
    }
    })
  }, [])
  useEffect(()=>{
    cartUpdate(board._id, updateData);
  },[updateData.status])
 
   const handleConfirmRequest = () => {
    console.log("this is data to be updated", updateData);
    setUpdateData((prev) => ({ ...prev, status: "confirm" }))

  }
  const handleCancelRequest = () => {
    console.log("this is data to be updated", updateData);
    setUpdateData((prev) => ({ ...prev, status: "confirm" }))

  }

    return (
         
       <div>
      <div className="grid grid-cols-1  max-w-[700px]  mx-auto gap-4">

        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={billboard.boardPhotoUrl} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleCancelRequest}>Cancel</button>
      <button className="btn btn-primary" onClick={handleConfirmRequest}>Confirm</button>

    </div>
  </div>
</div>
       </div>
       </div>

    )
}
