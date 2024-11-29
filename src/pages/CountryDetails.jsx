import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const touristsSpot = useLoaderData()
    const { _id, image, continent, country_name, tourist_spot_name, location, description, average_cost, total_visitors_per_year, travel_time, seasonality, email_address, user_name } = touristsSpot;
    return (
        <div class="  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img class="object-cover w-full bg-cover bg-center" src={image} alt="Article"/>

    <div class="max-w-7xl mx-auto p-6">
        <div>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{continent}</span>
            <p href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600">{country_name}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{tourist_spot_name}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{location}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{average_cost}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{seasonality}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{travel_time}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{total_visitors_per_year}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{email_address}</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{user_name}</p>
        </div>
    </div>
</div>
    );
};

export default CountryDetails;