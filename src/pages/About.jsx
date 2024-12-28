import React from 'react';
import { FaBus, FaPassport, FaRegHandPointRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { RiHotelLine } from "react-icons/ri";4
import { SiHiltonhotelsandresorts } from "react-icons/si";

const About = () => {
    return (
        <div className='my-20'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-5 md:px-0'>
                <div className='col-span-2'>
                    <img className='w-full animate__animated animate__fadeInLeft' src="https://i.ibb.co.com/k9CHSqs/360-F-948939119-Q4c-Qj-Aoosy8-SQ60jjn-Vz0d8-Uhri-DCdi-D.jpg" alt="" />
                </div>
                <div className='col-span-3'>
                <h3 className='font-lato text-3xl font-bold'>Why choose us</h3>
                <p className='text-[#818181] my-2'>At Star Shelter, we are dedicated to providing a sanctuary of comfort, safety, and exceptional service for all our guests. People choose us because we prioritize creating a welcoming environment where every detail is thoughtfully curated to ensure a memorable stay. From our luxurious accommodations to personalized attention and state-of-the-art amenities, we aim to make every guest feel special. Whether you're here for relaxation, adventure, or celebration, Star Shelter offers a seamless blend of comfort and convenience, making us the trusted choice for travelers who seek excellence and warmth in their journeys.</p>
                <ul className='grid grid-cols-1 space-y-2 md:grid-cols-2'>
                    <li className='flex items-center gap-2'><FaRegHandPointRight className='text-orange-400 animate__animated animate__fadeInLeft'></FaRegHandPointRight><span className='text-[#818181]'>Sanctuary of Comfort and Safety</span></li>
                    <li className='flex items-center gap-2'><FaRegHandPointRight className='text-orange-400 animate__animated animate__fadeInLeft'></FaRegHandPointRight><span className='text-[#818181]'>Exceptional Service</span></li>
                    <li className='flex items-center gap-2'><FaRegHandPointRight className='text-orange-400 animate__animated animate__fadeInLeft'></FaRegHandPointRight><span className='text-[#818181]'>Luxurious Accommodations</span></li>
                    <li className='flex items-center gap-2'><FaRegHandPointRight className='text-orange-400 animate__animated animate__fadeInLeft'></FaRegHandPointRight><span className='text-[#818181]'>Thoughtful Curation</span></li>
                    <li className='flex items-center gap-2'><FaRegHandPointRight className='text-orange-400 animate__animated animate__fadeInLeft'></FaRegHandPointRight><span className='text-[#818181]'>Versatile Offerings</span></li>
                    <li className='flex items-center gap-2'><FaRegHandPointRight className='text-orange-400 animate__animated animate__fadeInLeft'></FaRegHandPointRight><span className='text-[#818181]'>Trusted Choice</span></li>
                </ul>
                </div>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 gap-6 mt-20 md:grid-cols-4'>
                <div className=''>
                    <p className='flex justify-center text-orange-400'><RiHotelLine className='w-20 h-20'></RiHotelLine></p>
                    <h1 className='font-lato text-3xl font-bold text-center my-4'>Great Hotels</h1>
                    <p className='text-center text-[#818181] px-2'>Discover the comfort and luxury of great hotels, where exceptional service and world-class amenities combine to create an unforgettable stay.</p>
                </div>
                <div className=''>
                    <p className='flex justify-center text-orange-400'><SiHiltonhotelsandresorts className='w-20 h-20'></SiHiltonhotelsandresorts></p>
                    <h1 className='font-lato text-3xl font-bold text-center my-4'>Great Resorts</h1>
                    <p className='text-center text-[#818181] px-2'>Indulge in the ultimate getaway at a luxurious resort, where relaxation meets adventure in the most serene settings. From private beaches and infinity pools to spa retreats and gourmet dining.</p>
                </div>
                <div className=''>
                    <p className='flex justify-center text-orange-400'><FaBus className='w-20 h-20'></FaBus></p>
                    <h1 className='font-lato text-3xl font-bold text-center my-4'>Private Transport</h1>
                    <p className='text-center text-[#818181] px-2'>Experience the convenience and comfort of private transport. Whether it’s a car, a private jet, or a personal yacht, private transport ensures a seamless and exclusive journey.</p>
                </div>
                <div className=''>
                    <p className='flex justify-center text-orange-400'><FaPassport className='w-20 h-20'></FaPassport></p>
                    <h1 className='font-lato text-3xl font-bold text-center my-4'>Booking Made Easy</h1>
                    <p className='text-center text-[#818181] px-2'>Simplify your travel plans with hassle-free booking services that cater to your every need.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 mt-20 md:grid-cols-2'>
                <div className='flex flex-col justify-center text-white bg-[#383838] px-4 py-10 md:px-0'>
                    <h1 className='font-lato text-5xl text-center text-orange-400 font-bold'>Explore Your Destination</h1>
                    <p className='text-center mt-6'>Embark on an unforgettable journey as you explore your destination like never before. From iconic landmarks to off-the-beaten-path treasures, every place holds unique experiences waiting to be discovered.</p>
                    <Link to={`/allTouristSpots`} className="card-actions mt-6 justify-center">
          <button className=" text-orange-400 border-2 border-orange-400 px-6 py-2 uppercase hover:text-white">See More</button>
        </Link>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/74rqMYD/Untitled-design-71.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;