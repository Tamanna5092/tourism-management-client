import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const AddTouristSpot = () => {
  const [continent, setContinent] = useState("");
  const [countries, setCountries] = useState([]);
  const { user } = useContext(AuthContext);

  const continentAndCountryData = {
    "Southeast Asia": [
      "Bangladesh",
      "Thailand",
      "China",
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
      "Germany",
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
    setCountries(continentAndCountryData[selectedContinent] || []);
  };

  const handleAddTourisSpot = async (e) => {
    e.preventDefault();
    console.log("Hello world");
    const form = e.target;
    const image = form.image.value;
    const continent = form.continent.value;
    const country = form.country.value;
    const tourist_spot = form.tourist_spot.value;
    const location = form.location.value;
    const description = form.description.value;
    const average_cost = parseInt(form.average_cost.value);
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitors = form.totalVisitors.value;
    const email = form.email.value;
    const username = form.username.value;
    console.log({
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
      email,
      username
    });

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
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/touristsSpot`,
        countryData
      );
      console.log(data)
      toast.success("Touris Spot Added Successful!");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <section class="max-w-4xl p-6 mx-auto my-10 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-2xl font-semibold text-[#383838] text-center capitalize mb-4 dark:text-white">
          Add Touris Spot
        </h2>

        <form onSubmit={handleAddTourisSpot}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-[#383838] dark:text-gray-200" for="text">
                Image
              </label>
              <input
                id="image"
                name="image"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-[#383838] bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label class="text-[#383838] dark:text-gray-200" for="text">
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
              <label class="text-[#383838] dark:text-gray-200" for="text">
                Country Name
              </label>
              <select name="country" id="country">
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} country={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label class="text-[#383838] dark:text-gray-200" for="text">
                Tourist Spot Name
              </label>
              <input
                id="tourist_spot"
                name="tourist_spot"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-[#383838] bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-[#383838] dark:text-gray-200" for="text">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-[#383838] bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-[#383838] dark:text-gray-200" for="text">
                Average Cost
              </label>
              <input
                id="average_cost"
                name="average_cost"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-[#383838] bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-[#383838] dark:text-gray-200" for="seasonality">
                Seasonality
              </label>
              <input
                id="seasonality"
                name="seasonality"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-[#383838] bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-[#383838] dark:text-gray-200" for="travel_time">
                Tavel Time
              </label>
              <input
                id="travel_time"
                name="travel_time"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-[#383838] bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-[#383838] dark:text-gray-200"
                for="totalVisitors"
              >
                Total Visitors Per Year
              </label>
              <input
                id="totalVisitors"
                name="totalVisitors"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-[#383838] bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-[#383838] dark:text-gray-200" for="text">
                Description
              </label>
              <input
                id="description"
                name="description"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-[#383838] bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-[#383838] dark:text-gray-200" for="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={user?.email}
                class="block w-full px-4 py-2 mt-2 text-[#383838] bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-[#383838] dark:text-gray-200" for="username">
                User Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={user?.displayName}
                class="block w-full px-4 py-2 mt-2 text-[#383838] bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-400 rounded-md hover:bg-[#383838] focus:outline-none focus:bg-gray-600">
              Add spot
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddTouristSpot;
