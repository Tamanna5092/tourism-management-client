import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const Review = () => {

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="font-lato text-5xl font-extrabold text-center mb-10">The Peole Who Know Best
      </h1>
      <Swiper
        pagination={{
           dynamicBullets: true
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper cursor-grab"
      >
        <SwiperSlide>
          <div className="">
            <img
              src="https://i.ibb.co.com/jgbBvtL/pexels-brynna-spencer-63356-227288.jpg"
              alt=""
              className="w-52 h-52 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="max-w-3xl mx-auto mb-10 px-2 md:px-0">
            <p className="text-center text-[#818181] mt-4">
              Visiting the Eiffel Tower was an unforgettable experience! The
              view from the top was breathtaking, and the light show at night
              was magical. The staff was friendly, and the facilities were
              well-maintained. Highly recommend for couples and families!
            </p>
              <p className="flex text-orange-400 gap-1 justify-center my-4">
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaRegStar className="w-5 h-5"></FaRegStar>
              </p> 
            <h1 className="font-lato text-center text-3xl font-medium">Oliver Davis</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://i.ibb.co.com/kQbYGM9/handsome-bearded-guy-posing-against-white-wall-273609-20597.jpg"
              alt=""
              className="w-52 h-52 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="max-w-3xl mx-auto px-2 md:px-0">
            <p className="text-center text-[#818181] mt-4">
            The Anne Frank House provides a poignant insight into history. Visiting the secret annex where Anne Frank hid is a moving experience. The exhibits are well-curated, offering a deep reflection on her legacy. A must-visit for history enthusiasts.
            </p>
              <p className="flex text-orange-400 gap-1 justify-center my-4">
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaRegStar className="w-5 h-5"></FaRegStar>
              </p> 
            <h1 className="font-lato text-center text-3xl font-medium">James Taylor</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://i.ibb.co.com/wM8Fdvb/pexels-danxavier-1121796.jpg"
              alt=""
              className="w-52 h-52 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="max-w-3xl mx-auto px-2 md:px-0">
            <p className="text-center text-[#818181] mt-4">
            Kruger National Park is a wildlife enthusiast’s paradise! The safari experience was amazing, and we spotted all the Big Five. The park’s guides were knowledgeable, and the lodges were luxurious with excellent dining options. Don’t miss this adventure!
            </p>
              <p className="flex text-orange-400 gap-1 justify-center my-4">
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaRegStar className="w-5 h-5"></FaRegStar>
                <FaRegStar className="w-5 h-5"></FaRegStar>
              </p> 
            <h1 className="font-lato text-center text-3xl font-medium">Julian Alvarez</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://i.ibb.co.com/bL4bRr6/pexels-olly-787942.jpg"
              alt=""
              className="w-52 h-52 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="max-w-3xl mx-auto px-2 md:px-0">
            <p className="text-center text-[#818181] mt-4">
            The Matterhorn is breathtakingly beautiful! Whether you’re skiing or hiking, the views are unparalleled. The nearby chalets were cozy and well-equipped, and the cable car rides made the journey smooth. A must-visit for nature enthusiasts!
            </p>
              <p className="flex text-orange-400 gap-1 justify-center my-4">
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaRegStar className="w-5 h-5"></FaRegStar>
              </p> 
            <h1 className="font-lato text-center text-3xl font-medium">Emily Martinez</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://i.ibb.co.com/zShCCMw/pexels-minan1398-680239.jpg"
              alt=""
              className="w-52 h-52 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="max-w-3xl mx-auto px-2 md:px-0">
            <p className="text-center text-[#818181] mt-4">
            The Colosseum in Rome is an iconic symbol of ancient history. Walking through its massive arches and learning about gladiatorial combat offers a fascinating glimpse into the past. Its architectural grandeur and historical significance make it a must-visit landmark.
            </p>
              <p className="flex text-orange-400 gap-1 justify-center my-4">
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
              </p> 
            <h1 className="font-lato text-center text-3xl font-medium">Bai Lusi</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://i.ibb.co.com/GpdLqzx/pexels-simon-robben-55958-977796.jpg"
              alt=""
              className="w-52 h-52 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="max-w-3xl mx-auto px-2 md:px-0">
            <p className="text-center text-[#818181] mt-4">
            Phuket is a dream destination for beach lovers. The water sports were thrilling, and the local food was delicious. The resort facilities were top-notch, with friendly staff and clean pools. Perfect for relaxation and adventure.
            </p>
              <p className="flex text-orange-400 gap-1 justify-center my-4">
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaStar className="w-5 h-5"></FaStar>
                <FaRegStar className="w-5 h-5"></FaRegStar>
                <FaRegStar className="w-5 h-5"></FaRegStar>
              </p> 
            <h1 className="font-lato text-center text-3xl font-medium">Nick</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
