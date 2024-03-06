import Image from "next/image";

const Booked = () => {
    const billboards = [
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            landmark: "Jaydev Bihar",
            location: "Bhubameswar,odisha,India",
            price: "Rs.10000 /month",
        },
    ];

    return (
        <div className="container mx-auto py-2">
            <div className="grid grid-cols-1  max-w-[700px]  mx-auto gap-4">
                <h1 className="text-2xl font-bold mx-2 pb-2 px-1 md:mx-0">Booked Boards</h1>

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
                                className="w-full h-40 lg:w-48"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between leading-normal">
                            <h5 className="text-gray-900 font-bold text-xl">
                                {billboard.landmark}
                            </h5>
                            <p className="text-gray-800  font-medium">
                                {billboard.location}
                            </p>
                            <p className="text-gray-800  font-medium">
                                Paid Amount:  Rs{5000}
                            </p>
                            <p className="text-gray-800  font-medium">
                                No. of Months: {5}
                            </p>
                            <p className="text-gray-800  font-medium">
                                Start Date: {"02/03/2024"}
                            </p>

                        </div>
                        <div className=" px-3 lg:grid lg:grid-cols-2">
                            <div className="d"></div>
                            <h1 className=" font-extrabold p-2 inline-block bg-green-700 text-white h-fit rounded-full mt-2 mb-2
                ">{"Yet to start"}</h1>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Booked;
