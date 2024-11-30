import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const touristsSpot = useLoaderData()
    const { _id, image, continent, country, tourist_spot, location, description, average_cost, totalVisitors, travel_time, seasonality } = touristsSpot;
    return (
        <div class="  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img class="object-cover w-full bg-cover bg-center" src={image} alt="Article"/>

    <div class="max-w-7xl mx-auto p-6">
        <div>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{continent}</span>
            <p href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600">{country}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{tourist_spot}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{location}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{average_cost}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{seasonality}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{travel_time}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{totalVisitors}</p>
        </div>
    </div>
</div>
    );
};

export default CountryDetails;