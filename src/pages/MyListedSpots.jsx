import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const MyListedSpots = () => {
  const { user } = useContext(AuthContext);
  const [touristsSpots, setTouristsSpots] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/touristsSpots/${user?.email}`
    );
    setTouristsSpots(data);
  };

  const handleDelete = async(id) => {
    try {
          const result = await Swal.fire({
            title: "Are you sure?",
            text: "You want to remove this spot!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
            if (result.isConfirmed) {
              const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/touristsSpot/${id}`)
                Swal.fire({
                  title: "Deleted!",
                  text: "Your spot has been deleted.",
                  icon: "success"
                }); 
            }; 
        getData()
    } catch (error) { 
        toast.error(error);
    }
  }

  return (
    <section class="container px-4 my-10 mx-auto">
      <div class="flex items-center gap-x-3">
        <h2 class="font-lato text-2xl font-medium dark:text-white">
          My Listed Tourist Spots
        </h2>

        <span class="px-3 py-1 text-xs text-white bg-orange-400 rounded-full dark:bg-gray-800 dark:text-blue-400">
          {touristsSpots.length}
        </span>
      </div>

      <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-[#383838] dark:text-gray-400"
                    >
                      <div class="flex items-center gap-x-3">
                        <span>Country</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-[#383838] dark:text-gray-400"
                    >
                      <div class="flex items-center gap-x-3">
                        <span>Tourist Spot</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-[#383838] dark:text-gray-400"
                    >
                      <div class="flex items-center gap-x-3">
                        <span>Location</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-[#383838] dark:text-gray-400"
                    >
                      Average Cost
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-[#383838] dark:text-gray-400"
                    >
                      Seasonality
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-[#383838] dark:text-gray-400"
                    >
                      Travel Time
                    </th>

                    <th scope="col" class="relative py-3.5 px-4">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {touristsSpots.map((touristSpot) => (
                    <tr key={touristSpot._id}>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <div class="flex items-center gap-x-2">
                            <img
                              class="object-cover w-10 h-10 rounded-full"
                              src={touristSpot.image}
                              alt=""
                            />
                            <div>
                              <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                                {touristSpot.country}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {touristSpot.tourist_spot}
                        </td>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {touristSpot.location}
                      </td>
                      <td class="px-4 py-4 text-sm text-orange-400 dark:text-gray-300 whitespace-nowrap">
                        ${touristSpot.average_cost}
                      </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {touristSpot.seasonality}
                        </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {touristSpot.travel_time}
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button onClick={()=> handleDelete(touristSpot._id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>

                          <Link to={`/updateTouristSpot/${touristSpot._id}`} className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyListedSpots;
