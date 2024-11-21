import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar'

// import required modules
import { Scrollbar, Autoplay } from 'swiper/modules';
import Slide from './Slide';

import bgimg1 from '../assets/image/Carousel1.webp'
import bgimg2 from '../assets/image/Carousel2.jpg'
import bgimg3 from '../assets/image/Carousel3.jpg'
import bgimg4 from '../assets/image/Carousel4.jpg'

 export default function Carousel(){
    return (
        <>
        <Swiper
          scrollbar={{
            hide: true
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Scrollbar, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide image={bgimg1}  text={'Explore the World Uncover'}></Slide>
            </SwiperSlide>
          <SwiperSlide>
            <Slide image={bgimg2} text={'Your Perfect Dream Vacation!'}></Slide>
            </SwiperSlide>
          <SwiperSlide>
            <Slide image={bgimg3} text={'Beautiful and Breathtaking Destinations Await!'}></Slide>
            </SwiperSlide>
          <SwiperSlide>
            <Slide image={bgimg4} text={'Start Your Journey with Us!'}></Slide>
            </SwiperSlide>
        </Swiper>
      </>
    );
};