import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const touristsSpot = useLoaderData()
    const { _id, image, continent, country, tourist_spot, location, description, average_cost, totalVisitors, travel_time, seasonality } = touristsSpot;
    return (
        <div class="  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img class="object-cover w-full h-[600px] bg-cover bg-center" src={image} alt="Article"/>

    <div class="max-w-7xl mx-auto p-6">
        <div className='max-w-sm space-y-4 md:max-w-md lg:max-w-lg'>
            <div className='flex gap-8'>
                <div  className='flex justify-between w-40 font-lato'>
                <p className='text-lg font-medium'>Continent</p>
                <span className='text-lg font-medium'>:</span>
                </div>
                <span className='text-orange-400'>{continent}</span>
            </div>
            <div className='flex gap-8'>
                <div className='flex justify-between w-40 font-lato'>
                <p className='text-lg font-medium'>Country</p>
                <span className='text-lg font-medium'>:</span>
                </div>
                <span className='text-orange-400'>{country}</span>
            </div>
            <div className='flex gap-8'>
                <div className='flex justify-between w-40 font-lato'>
                <p className='text-lg font-medium'>Tourist Spot</p>
                <span className='text-lg font-medium'>:</span>
                </div>
                <span className='text-orange-400'>{tourist_spot}</span>
            </div>
            <div className='flex gap-8'>
                <div className='flex justify-between w-40 font-lato'>
                <p className='text-lg font-medium'>Location</p>
                <span className='text-lg font-medium'>:</span>
                </div>
                <span className='text-orange-400'>{location}</span>
            </div>
            <div className='flex gap-8'>
                <div className='flex justify-between w-40 font-lato'>
                <p className='text-lg font-medium'>Average cost</p>
                <span className='text-lg font-medium'>:</span>
                </div>
                <span className='text-orange-400'>${average_cost}</span>
            </div>
            <div className='flex gap-8'>
                <div className='flex justify-between w-40 font-lato'>
                <p className='text-lg font-medium'>Seasonality</p>
                <span className='text-lg font-medium'>:</span>
                </div>
                <span className='text-orange-400'>{seasonality}</span>
            </div>
            <div className='flex gap-8'>
                <div className='flex justify-between w-40 font-lato'>
                <p className='text-lg font-medium'>Travel time</p>
                <span className='text-lg font-medium'>:</span>
                </div>
                <span className='text-orange-400'>{travel_time}</span>
            </div>
            <div className='flex gap-8'>
                <div className='flex justify-between w-40 font-lato'>
                <p className='text-lg font-medium'>Visitors per year</p>
                <span>:</span>
                </div>
                <span className='text-orange-400'>{totalVisitors}</span>
            </div>
        </div>
        <p className="font-lato mt-4 text-lg text-justify dark:text-gray-400">Description about tourist spot: <span className='font-roboto text-base text-[#818181]'>{description}</span></p>
    </div>
</div>
    );
};

export default CountryDetails;