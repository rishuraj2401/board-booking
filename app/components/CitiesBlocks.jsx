import React from 'react';
const CitiesBlocks = () => {
    const citiesData = [
        { id: 1, name: 'Mumbai' },
        { id: 2, name: 'Delhi' },
        { id: 3, name: 'Kolkata' },
        { id: 4, name: 'Chennai' },
        { id: 5, name: 'Bangalore' },
        { id: 6, name: 'Hyderabad' },
        { id: 7, name: 'Ahmedabad' },
        { id: 8, name: 'Pune' },
        { id: 9, name: 'Jaipur' },
        { id: 10, name: 'Lucknow' },
    ];
    return (
        <div>
            <div className="container mx-auto mt-3 px-2 ">
                <h2 className="text-2xl font-semibold mb-4">Book Board in a city</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {citiesData.map((city) => (
                        <div
                            key={city.id}
                            // onClick={() => handleCityClick(city.name)}
                            className="py-[4rem] rounded flex items-center justify-center bg-gray-200 cursor-pointer"
                        >
                        
                            <h1 className='text-2xl font-semibold text-black'> {city.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CitiesBlocks;
