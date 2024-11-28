import React from "react";

const CountryCard = ({ touristSpot }) => {
  const { country_name, average_cost, total_visitors_per_year, travel_time, seasonality } = touristSpot;
  return (
    <div class="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        class="object-cover w-full h-56"
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />

      <div class="py-5 text-center">
        <a
          href="#"
          class="block text-xl font-bold text-gray-800 dark:text-white"
          tabindex="0"
          role="link"
        >
          {country_name}
        </a>
        <p class="text-sm text-gray-700 dark:text-gray-200">
          {average_cost}
        </p>
        <p>{total_visitors_per_year}</p>
        <p>{travel_time}</p>
        <p>{seasonality}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
