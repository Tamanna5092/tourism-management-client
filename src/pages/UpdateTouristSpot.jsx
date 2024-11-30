import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateTouristSpot = () => {
    const {user} = useContext(AuthContext)
    const touristsSpot = useLoaderData()
    const { _id, image, continent, country, tourist_spot, location, description, average_cost, totalVisitors, travel_time, seasonality } = touristsSpot;

  const handleUpdateTourisSpot = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const continent = form.continent.value;
    const country = form.country.value;
    const tourist_spot = form.tourist_spot.value;
    const location = form.location.value;
    const description = form.description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitors = form.totalVisitors.value;
    const email = form.email.value;
    const username = form.username.value;

    const countryData = {
      image,
      continent,
      country,
      tourist_spot,
      location,
      description,
      average_cost,
      seasonality,
      travel_time,
      totalVisitors,
      user:{
        username,
        email,
        photo: user?.photoURL
        
      }
    };
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/touristsSpot/${_id}`,
        countryData
      );
      console.log(data)
      toast.success("Touris Spot Updated Successful!");
    } catch (error) {
      toast.error(error);
    }
  };

    return (
        <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add Touris Spot
        </h2>

        <form onSubmit={handleUpdateTourisSpot}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="text">
                Image
              </label>
              <input
                id="image"
                name="image"
                type="text"
                defaultValue={image}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-gray-700 dark:text-gray-200" for="text">
                Continent
              </label>
              <select defaultValue={continent} name="continent" id="continent">
                <option value="">Select Continent</option>
                <option value="Southeast Asia">Southeast Asia</option>
                <option value="Europe">Europe</option>
                <option value="America">America</option>
                <option value="Africa">Africa</option>
                <option value="Middle East">Middle East</option>
                <option value="Central Asia">Central Asia</option>
              </select>
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-gray-700 dark:text-gray-200" for="text">
                Country Name
              </label>
              <input
                id="country"
                name="country"
                type="text"
                defaultValue={country}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="text">
                Tourist Spot Name
              </label>
              <input
                id="tourist_spot"
                name="tourist_spot"
                type="text"
                defaultValue={tourist_spot}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="text">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                defaultValue={location}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="text">
                Average Cost
              </label>
              <input
                id="average_cost"
                name="average_cost"
                type="text"
                defaultValue={average_cost}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="seasonality">
                Seasonality
              </label>
              <input
                id="seasonality"
                name="seasonality"
                type="text"
                defaultValue={seasonality}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="travel_time">
                Tavel Time
              </label>
              <input
                id="travel_time"
                name="travel_time"
                type="text"
                defaultValue={travel_time}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="totalVisitors"
              >
                Total Visitors Per Year
              </label>
              <input
                id="totalVisitors"
                name="totalVisitors"
                type="text"
                defaultValue={totalVisitors}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="text">
                Description
              </label>
              <input
                id="description"
                name="description"
                type="text"
                defaultValue={description}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="username">
                User Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={user?.displayName}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
    );
};

export default UpdateTouristSpot;