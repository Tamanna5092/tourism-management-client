import React from "react";
import { MdDateRange } from "react-icons/md";
import {
  FaComment,
  FaEye,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 my-10 md:grid-cols-4 lg:md:grid-cols-4">
      <div className="col-span-3">
        {/* solo vacation */}
        <section className="">
          <div>
            <img
              className="w-full h-[400px] animate__animated animate__fadeInLeft"
              src="https://i.ibb.co.com/NKD3hWW/istockphoto-1917023956-612x612.jpg"
              alt=""
            />
          </div>
          <div className="px-4 md:px-0">
            <h1 className="font-lato text-3xl font-bold mt-4">
              The Joy of a Solo Vacation
            </h1>
            <p className="text-[#818181] my-4">
              A solo vacation is a liberating experience that lets you explore
              the world on your terms. It offers the chance to connect deeply
              with yourself, embrace new challenges, and discover hidden gems
              without compromise. From serene landscapes to bustling cityscapes,
              traveling alone allows you to create a journey uniquely tailored
              to your passions. It's a time to grow, reflect, and indulge in the
              beauty of independence, leaving you with unforgettable memories
              and a renewed sense of self.
            </p>
            <div className="flex flex-col justify-between my-4 md:flex-row">
              <div className="flex gap-6">
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <MdDateRange className="w-5 h-5"></MdDateRange> 20/12/2024
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaEye className="w-5 h-5"></FaEye> 68
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaHeart className="w-5 h-5"></FaHeart> 26
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaComment className="w-5 h-5"></FaComment> 4
                </p>
              </div>
              <div className="flex space-x-6 mt-4 align-center md:mt-0">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Facebook"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaFacebook className="w-5 h-5"></FaFacebook>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Instagram"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaInstagram className="w-5 h-5"></FaInstagram>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Twitter"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaTwitter className="w-5 h-5"></FaTwitter>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* family vacation */}
        <section className="mt-20">
          <div>
            <img
              className="w-full h-[400px] animate__animated animate__fadeInLeft"
              src="https://i.ibb.co.com/94wyyfh/pexels-astreyas-photo-10804119.jpg"
              alt=""
            />
          </div>
          <div className="px-4 md:px-0">
            <h1 className="font-lato text-3xl font-bold mt-4">
              The Magic of a Family Vacation
            </h1>
            <p className="text-[#818181] my-4">
              A family vacation is more than just a getaway—it’s a chance to
              bond, laugh, and create memories that last a lifetime. Whether
              building sandcastles on the beach, exploring theme parks, or
              sharing stories around a campfire, these moments bring loved ones
              closer together. Traveling as a family nurtures connections,
              fosters teamwork, and offers a shared sense of adventure. It’s an
              opportunity to escape the daily routine and embrace the joy of
              togetherness in a new and exciting setting.
            </p>
            <div className="flex flex-col justify-between my-4 md:flex-row">
              <div className="flex gap-6">
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <MdDateRange className="w-5 h-5"></MdDateRange> 26/12/2024
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaEye className="w-5 h-5"></FaEye> 87
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaHeart className="w-5 h-5"></FaHeart> 35
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaComment className="w-5 h-5"></FaComment> 14
                </p>
              </div>
              <div className="flex space-x-6 mt-4 align-center md:mt-0">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Facebook"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaFacebook className="w-5 h-5"></FaFacebook>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Instagram"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaInstagram className="w-5 h-5"></FaInstagram>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Twitter"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaTwitter className="w-5 h-5"></FaTwitter>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* travel the whole world in 30 days */}
        <section className="mt-20">
          <div>
            <img
              className="w-full h-[400px] animate__animated animate__fadeInLeft"
              src="https://i.ibb.co.com/k9CHSqs/360-F-948939119-Q4c-Qj-Aoosy8-SQ60jjn-Vz0d8-Uhri-DCdi-D.jpg"
              alt=""
            />
          </div>
          <div className="px-4 md:px-0">
            <h1 className="font-lato text-3xl font-bold mt-4">
              Travel The World In Only 30 Days
            </h1>
            <p className="text-[#818181] my-4">
              Embark on an extraordinary 30-day adventure to explore the world’s
              most iconic destinations. From the bustling streets of Tokyo to
              the serene beaches of the Maldives, this whirlwind journey offers
              a taste of diverse cultures, breathtaking landscapes, and
              unforgettable experiences. With every sunrise in a new city,
              you’ll create memories that span continents, savor exotic
              cuisines, and witness wonders like the Eiffel Tower, the Great
              Wall, and the Amazon rainforest. Traveling the world in 30 days is
              a thrilling, life-changing adventure that will leave you with
              stories to tell for a lifetime.
            </p>
            <div className="flex flex-col justify-between my-4 md:flex-row">
              <div className="flex gap-6">
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <MdDateRange className="w-5 h-5"></MdDateRange> 20/12/2024
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaEye className="w-5 h-5"></FaEye> 168
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaHeart className="w-5 h-5"></FaHeart> 88
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaComment className="w-5 h-5"></FaComment> 27
                </p>
              </div>
              <div className="flex space-x-6 mt-4 align-center md:mt-0">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Facebook"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaFacebook className="w-5 h-5"></FaFacebook>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Instagram"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaInstagram className="w-5 h-5"></FaInstagram>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Twitter"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaTwitter className="w-5 h-5"></FaTwitter>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* couple vacation */}
        <section className="mt-20">
          <div>
            <img
              className="w-full h-[400px] animate__animated animate__fadeInLeft"
              src="https://i.ibb.co.com/jbpHkyp/pexels-jmendezrf-1066801.jpg"
              alt=""
            />
          </div>
          <div className="px-4 md:px-0">
            <h1 className="font-lato text-3xl font-bold mt-4">
              Rediscover Love on a Couple’s Vacation
            </h1>
            <p className="text-[#818181] my-4">
              A couple’s vacation is the perfect opportunity to rekindle romance
              and strengthen your bond. Whether strolling hand-in-hand along
              pristine beaches, enjoying candlelit dinners under starlit skies,
              or exploring charming towns together, every moment becomes a
              cherished memory. It’s a time to leave behind the stresses of
              daily life, connect on a deeper level, and share new adventures. A
              couple’s getaway brings excitement, intimacy, and a renewed
              appreciation for each other in a setting designed for love and
              togetherness.
            </p>
            <div className="flex flex-col justify-between my-4 md:flex-row">
              <div className="flex gap-6">
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <MdDateRange className="w-5 h-5"></MdDateRange> 17/12/2024
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaEye className="w-5 h-5"></FaEye> 48
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaHeart className="w-5 h-5"></FaHeart> 19
                </p>
                <p className="flex gap-2 items-center text-[#818181] hover:text-orange-400">
                  <FaComment className="w-5 h-5"></FaComment> 9
                </p>
              </div>
              <div className="flex space-x-6 mt-4 align-center md:mt-0">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Facebook"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaFacebook className="w-5 h-5"></FaFacebook>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Instagram"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaInstagram className="w-5 h-5"></FaInstagram>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Twitter"
                  className="text-[#818181] hover:text-orange-400 dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaTwitter className="w-5 h-5"></FaTwitter>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="col-span-1 px-4 md:px-0">
        {/* Categories */}
        <div>
            <h3 className="font-lato text-3xl font-bold mb-4">Categories</h3>
          <ul className="space-y-4 animate__animated animate__backInRight">
            <li className="text-[#818181] hover:text-orange-400 cursor-pointer">
              Beach Vacations
            </li>
            <li className="text-[#818181] hover:text-orange-400 cursor-pointer">
              Adventure Vacations
            </li>
            <li className="text-[#818181] hover:text-orange-400 cursor-pointer">
              Cultural Vacations
            </li>
            <li className="text-[#818181] hover:text-orange-400 cursor-pointer">
              Romantic Getaways
            </li>
            <li className="text-[#818181] hover:text-orange-400 cursor-pointer">
              Family Vacations
            </li>
            <li className="text-[#818181] hover:text-orange-400 cursor-pointer">
              Solo Vacations
            </li>
            <li className="text-[#818181] hover:text-orange-400 cursor-pointer">
              Wellness Retreats
            </li>
            <li className="text-[#818181] hover:text-orange-400 cursor-pointer">
              Luxury Escapes
            </li>
            <li className="text-[#818181] hover:text-orange-400 cursor-pointer">
              Backpacking Trips
            </li>
            <li className="text-[#818181] hover:text-orange-400 cursor-pointer">
              Ski Vacations
            </li>
            <li className="text-[#818181] hover:text-orange-400 cursor-pointer">
              Food & Wine Tours
            </li>
          </ul>
        </div>
        {/* latest Posts */}
        <div className="mt-10">
          <h1 className="font-lato text-3xl font-bold my-4">Latest Posts</h1>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <div className="col-span-1">
              <img
                className="w-full h-[300px] transform transition-transform hover:scale-110 md:h-20"
                src="https://i.ibb.co.com/nRLjs9T/pexels-quang-nguyen-vinh-222549-6346796.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col col-span-2 flex-">
              <h4 className="font-lato text-2xl font-bold hover:text-orange-400 md:text-lg">
                Discover Your Vacation
              </h4>
              <p className="text-[#818181] mt-2 md:mt-4">23/11/2024</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-6 md:grid-cols-3">
            <div className="col-span-1">
              <img
                className="w-full h-[300px] transform transition-transform hover:scale-110 md:h-20"
                src="https://i.ibb.co.com/pf3h4b7/pexels-kirandeepsingh-28729410.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col col-span-2 flex-">
              <h4 className="font-lato text-2xl font-bold hover:text-orange-400 md:text-lg">
                The Ways To Travel
              </h4>
              <p className="text-[#818181] mt-2 md:mt-4">27/11/2024</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-6 md:grid-cols-3">
            <div className="col-span-1">
              <img
                className="w-full h-[300px] transform transition-transform hover:scale-110 md:h-20"
                src="https://i.ibb.co.com/vwZpwB2/pexels-alessio-cesario-975080-1906879.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col col-span-2 flex-">
              <h4 className="font-lato text-2xl font-bold hover:text-orange-400 md:text-lg">
                Work Hard Often
              </h4>
              <p className="text-[#818181] mt-2 md:mt-4">04/12/2024</p>
            </div>
          </div>
        </div>
        {/* follow us */}
        <div className="mt-10">
          <h3 className="font-lato text-3xl font-bold">Follo us</h3>
          <div className="flex flex-col gap-2  mt-2">
            <a
              href=""
              className="flex gap-2 items-center text-[#818181] hover:text-orange-400"
            >
              <FaFacebook className="w-5 h-5"></FaFacebook> Facebook
            </a>
            <a
              href=""
              className="flex gap-2 items-center text-[#818181] hover:text-orange-400"
            >
              <FaInstagram className="w-5 h-5"></FaInstagram> Instagram
            </a>
            <a
              href=""
              className="flex gap-2 items-center text-[#818181] hover:text-orange-400"
            >
              <FaTwitter className="w-5 h-5"></FaTwitter> Twitter
            </a>
            <a
              href=""
              className="flex gap-2 items-center text-[#818181] hover:text-orange-400"
            >
              <FaLinkedin className="w-5 h-5"></FaLinkedin> LinkedIn
            </a>
            <a
              href=""
              className="flex gap-2 items-center text-[#818181] hover:text-orange-400"
            >
              <TbWorldWww className="w-5 h-5"></TbWorldWww>{" "}
              www.starshelter.com.bd
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
