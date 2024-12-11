import React from 'react';
import { Link } from 'react-router-dom';

const DreamPlace = () => {
    return (
        <div className='grid grid-cols-1 max-w-7xl mx-auto mt-20 md:grid-cols-2'>
            <div>
                <img src="https://i.ibb.co.com/kG4kG3j/istockphoto-1636432357-612x612.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-center px-4 md:px-0'>
                <h1 className='text-3xl font-lato font-extrabold md:text-5xl'>Explore your dream country with wonder.</h1>
                <p className='py-6 text-[#121111b2]'>Travel is an enriching experience that opens the door to new cultures, perspectives, and adventures. It allows you to step out of your comfort zone, meet diverse people, and explore breathtaking landscapes, from serene beaches to bustling cities.</p>
                <Link to={`/allTouristSpots`} className="mt-2">
          <button className="btn text-white bg-orange-400 px-10 py-4 uppercase rounded-lg hover:bg-[#383838]">See more</button>
        </Link>
            </div>
        </div>
    );
};

export default DreamPlace;