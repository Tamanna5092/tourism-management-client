import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sort from "./Sort";

const AllTouristSpots = () => {
  const [touristsSpots, setTouristsSpots] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/touristsSpots?&sort=${sort}`
      );
      setTouristsSpots(data);
      console.log(data);
    };
    getData();
  }, [sort]);

  return (
    <div className="max-w-7xl mx-auto space-y-6 my-10">
      <div>
        <Sort sort={sort} setSort={setSort}></Sort>
      </div>
      {touristsSpots.map((touristsSpot) => (
        <div className="grid grid-cols gap-6 card card-side bg-base-100 border p-4 md:grid-cols-2">
          <div>
            <img
              className="w-full h-[300px]"
              src={touristsSpot.image}
              alt="Movie"
            />
          </div>
          <div className="px-2">
            <h2 className="text-3xl font-bold">{touristsSpot.country}</h2>
            <p className="text-xl text-orange-400 font-bold my-2">
              ${touristsSpot.average_cost}
            </p>
            <p>{touristsSpot.totaVisitorsPerYear}</p>
            <p className="my-2">{touristsSpot.travel_time}</p>
            <p>{touristsSpot.seasonality}</p>
            <p className="my-2 text-justify text-[#121111b2]">
              {touristsSpot.description.slice(0, 300)}
            </p>
            <Link
              to={`/touristsSpot/${touristsSpot._id}`}
              className="card-actions"
            >
              <button className="btn mt-2 text-white bg-orange-400 hover:bg-[#383838]">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTouristSpots;
