import React from 'react';

const Gallery = () => {
    return (
        <div className=''>
            <div>
                <h1 className="text-4xl text-center my-10">Our Photo Gallery</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4'> 
                <img className='h-[400px]' src="https://i.ibb.co.com/tbSFBmL/desktop-wallpaper-hotel-management-hotels.jpg" alt="" />
               <img className='h-[400px]' src="https://i.ibb.co.com/DQ5DfNG/photo-1564013799919-ab600027ffc6.jpg"
            alt="" />
          <img className='h-[400px]'
            src="https://i.ibb.co.com/PZr4HVy/lovepik-hotel-room-picture-500530794.jpg"
            alt=""
          />  
           <img className='h-[400px]'
            src="https://i.ibb.co.com/y64YMfK/asian-guests-approach-reception-to-ask-accommodation-arriving-hotel-hoping-early-check-front-desk-st.webp"
            alt=""
          />
            </div>
        </div>
    );
};

export default Gallery;