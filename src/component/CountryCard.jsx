import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ touristSpot }) => {
  const { _id, image, tourist_spot, average_cost, description } = touristSpot;
  return (
    <div class="w-full overflow-hidden bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 dark:bg-gray-800">
      <img
        className="object-cover w-full h-56 hover:brightness-75"
        src={image}
        alt="avatar"
      />

      <div class="py-5 text-center px-4">
        <a
          href="#"
          class="block font-lato text-3xl font-extrabold dark:text-white"
          tabindex="0"
          role="link"
        >
          {tourist_spot}
        </a>
        <p className="text-orange-400 text-3xl font-bold my-4">
          ${average_cost}
        </p>
        <p class=" text-justify text-[#818181] dark:text-gray-200">
          {description.slice(0, 200)}
        </p>
        <Link
          to={`/touristsSpot/${_id}`}
          className="card-actions mt-6 justify-center"
        >
          <button className="btn text-white bg-orange-400 hover:bg-[#383838]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
