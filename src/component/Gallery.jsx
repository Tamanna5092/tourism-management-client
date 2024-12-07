import React from 'react';

const Gallery = () => {
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className="text-5xl text-center font-lato font-extrabold">Photo Gallery</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4'> 
                <img className='h-[400px]' src="https://i.ibb.co.com/vLPGgYq/ahsan-manzil-pink-palace-front-768-o.jpg"
            alt="" />
          <img className='h-[400px]'
            src="https://i.ibb.co.com/3rDbq6Z/djdisny-20200226-121241-0-1024x767.jpg"
            alt=""
          />  
          <img className='h-[400px]'
            src="https://i.ibb.co.com/3TrxqT6/Top-10-SA-Attractions-Christ-The-Redeemer.webp"
            alt=""
          />  
          <img className='h-[400px]'
            src="https://i.ibb.co.com/2qk2qFh/Taj-Mahal-In-India.jpg"
            alt=""
          />  
           <img className='h-[400px]'
            src="https://i.ibb.co.com/sVYn4WV/proudtobealbayano-20200207-132904-0-1024x768.jpg"
            alt=""
          />
          <img className='h-[400px]'
            src="https://i.ibb.co.com/fr5GsL0/things-to-do-in-rizal-take-a-dip-in-daranak-falls.jpg"
            alt=""
          />  
           <img className='h-[400px]'
            src="https://i.ibb.co.com/JRVMLyg/6ytlq8eswu1glft0hgp7g8ahzdb0-DQo9-UJ9-Xk-AEma2-Z.jpg"
            alt=""
          />
           <img className='h-[400px]'
            src="https://i.ibb.co.com/nCpkT8k/Cebu-Taoist-Temple.jpg"
            alt=""
          />
            </div>
        </div>
    );
};

export default Gallery;