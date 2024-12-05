import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination'; 
import { FreeMode, Pagination } from 'swiper/modules';
import { Link, useLoaderData } from 'react-router-dom';
import {  FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";


const OurGuides = () => {
  const guides = useLoaderData()
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div>
                
            <h1 className='text-4xl text-center mb-6'>Our Guides</h1>
            </div>
            <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      > 
       {
        guides.map((guid, id) => <SwiperSlide key={guid.id}>
           <div className="flex flex-col justify-center max-w-sm p-6 rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<Link to={'/guideInfo'}>
  <img src={guid.image} alt="" className="w-40 h-40 mx-auto rounded-full dark:bg-gray-500 aspect-square" /></Link>
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{guid.name}</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">{guid.continent} Guide</p>
            <p className='text-justify'>{guid.info.slice(0,110)}</p>
		</div>
		{/* <div className="flex justify-center pt-2 space-x-4 align-center">
			<a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
				  <IoMdMail className='w-5 h-5'></IoMdMail>
			</a>
			<a rel="noopener noreferrer" href="#" aria-label="Instagram" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
				 <FaInstagram className='w-5 h-5'></FaInstagram>
			</a>
			<a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
				 <FaTwitter className='w-5 h-5'></FaTwitter>
			</a>
			<a rel="noopener noreferrer" href="#" aria-label="LinkedIn" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
				 <FaLinkedinIn className='w-5 h-5'></FaLinkedinIn>
			</a>
		</div> */}
	</div>
</div>
        </SwiperSlide>)
       } 
      </Swiper>
            </div>
        </div>
        
    );
};

export default OurGuides;