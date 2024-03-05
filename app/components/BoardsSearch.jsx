import Image from "next/image";

const BillboardCards = () => {
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
              <p className="text-gray-700 text-lg font-medium">
                {billboard.location}
              </p>
              <p className="text-gray-900 font-bold">{billboard.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillboardCards;
