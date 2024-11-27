import React, { useState } from "react";

const TouristSpot = () => {
  const [continent, setContinent] = useState("");
  const [countries, setCountries] = useState([]);

  const countryData = {
    "Southeast Asia": [
      "Bangladesh",
      "Thailand",
      "Indonesia",
      "Malaysia",
      "Vietnam",
      "Cambodia",
    ],
    Europe: [
      "France",
      "Italy",
      "Spain",
      "England",
      "Netherlands",
      "Switzerland",
    ],
    America: [
      "United States of America",
      "Canada",
      "Brazil",
      "Argentina",
      "Mexico",
      "Peru",
    ],
    Africa: [
      "South Africa",
      "Tanzania",
      "Kenya",
      "Morocco",
      "Egypt",
      "Namibia",
    ],
    "Middle East": [
      "Jordan",
      "Saudi Arabia",
      "United Arab Emirates",
      "Iran",
      "Qatar",
      "Kuwait",
    ],
    "Central Asia": [
      "Uzbekistan",
      "Kyrgyzstan",
      "Kazakhstan",
      "Tajikistan",
      "Turkmenistan",
      "Mongolia",
    ],
  };

  const handleContinent = (e) => {
    const selectedContinent = e.target.value;
    setContinent(selectedContinent);
    setCountries(countryData[selectedContinent] || []);
  };




  

  return (
    <div>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add Touris Spot
        </h2>

        <form onSubmit={handleAddTourisSpot}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="image">
                Image
              </label>
              <input
                id="text"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label class="text-gray-700 dark:text-gray-200" for="text">
                Continent
              </label>
              <select onClick={handleContinent} name="continent" id="continent">
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
              <label class="text-gray-700 dark:text-gray-200" for="text">
                Country Name
              </label>
              <select name="country" id="country">
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option country={country}>{country}</option>
                ))}
              </select>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="text">
                Tourist Spot Name
              </label>
              <input
                id="tourist_spot_name"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="text">
                Location
              </label>
              <input
                id="location"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="text">
                Description
              </label>
              <input
                id="description"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="text">
                Average Cost
              </label>
              <input
                id="average_cost"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="seasonality">
                Seasonality
              </label>
              <input
                id="seasonality"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="travel_time">
                Tavel Time
              </label>
              <input
                id="travel_time"
                type="travel_time"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="totalVisitors"
              >
                Total Visitors Per Year
              </label>
              <input
                id="totalVisitors"
                type="totalVisitors"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                User Name
              </label>
              <input
                id="username"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default TouristSpot;