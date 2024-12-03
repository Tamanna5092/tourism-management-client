import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ touristSpot }) => {
  const { _id, image, country, average_cost, description } = touristSpot;
  return (
    <div class="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover w-full h-56"
        src={image}
        alt="avatar"
      />

      <div class="py-5 text-center">
        <a
          href="#"
          class="block text-xl font-bold text-gray-800 dark:text-white"
          tabindex="0"
          role="link"
        >
          {country}
        </a>
        <p>${average_cost}</p>
        <p class="text-sm text-gray-700 dark:text-gray-200">
          {description.slice(0-300)}
        </p>
        <Link to={`/touristsSpot/${_id}`} className="card-actions justify-center">
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
