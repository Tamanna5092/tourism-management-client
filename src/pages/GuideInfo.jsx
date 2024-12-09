import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const GuideInfo = () => {
  const guides = useLoaderData();
  const { id } = useParams();
  const guid = guides.find((guid) => guid.id === parseInt(id));
  const { name, image, continent, info, description, workExperience } = guid;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-2 mx-4 md:mx-0">
          <h1 className="font-lato text-3xl text-orange-400 font-extrabold md:text-5xl">
            {name}
          </h1>
          <p className="text-lg text-[#121111b2] font-semibold mt-2">
            {continent} Guide
          </p>
          <p className="text-xl font-medium mt-4">Work Experience:</p>
          <ul className="text-[#121111b2] mt-2 md:mr-4">
            <li>
              <strong>Started:</strong> {workExperience.started}
            </li>
            <li>
              <strong>Years Active:</strong> {workExperience.yearsActive} years
            </li>
            <li>
              <strong>Specialization:</strong> {workExperience.specialization}
            </li>
          </ul>
          <p className=" text-xl font-medium mt-6">About {name}:</p>
          <p className="text-[#121111b2] mt-2 md:mr-4">{info}</p>
        </div>
        <div className="col-span-1">
          <img
            className="h-[400px] w-full bg-gray-200 p-6"
            src={image}
            alt=""
          />
          <div className="flex justify-center pt-4 space-x-4 align-center">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Email"
              className="p-2 rounded-md bg-orange-400 hover:bg-[#383838] dark:text-gray-800 hover:dark:text-violet-600"
            >
              <IoMdMail className="w-5 h-5 text-white "></IoMdMail>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-md bg-orange-400 hover:bg-[#383838] dark:text-gray-800 hover:dark:text-violet-600"
            >
              <FaInstagram className="w-5 h-5 text-white"></FaInstagram>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-md bg-orange-400 hover:bg-[#383838] dark:text-gray-800 hover:dark:text-violet-600"
            >
              <FaTwitter className="w-5 h-5 text-white"></FaTwitter>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-md bg-orange-400 hover:bg-[#383838] dark:text-gray-800 hover:dark:text-violet-600"
            >
              <FaLinkedinIn className="w-5 h-5 text-white"></FaLinkedinIn>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-0">
        <p className="text-[#121111b2] mt-10">{description}</p>
      </div>
    </div>
  );
};

export default GuideInfo;
