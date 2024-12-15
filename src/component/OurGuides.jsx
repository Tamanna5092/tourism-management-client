import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode,Autoplay } from "swiper/modules";
import { Link, useLoaderData } from "react-router-dom";

const OurGuides = () => {
  const guides = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto my-14">
      <div>
        <h1 className="font-lato text-5xl font-extrabold text-center mb-6">Our Guides</h1>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {guides.map((guid, id) => (
            <SwiperSlide key={guid.id}>
              <div className="flex flex-col justify-center max-w-sm p-6 rounded-xl cursor-grab sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <Link to={`/guideInfo/${id}`}>
                  <img
                    src={guid.image}
                    alt=""
                    className="w-40 h-40 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                  />
                </Link>
                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                  <div className="my-4">
                    <h2 className="font-lato text-xl font-extrabold mt-4 sm:text-3xl">
                      {guid.name}
                    </h2>
                    <p className="px-5 text-orange-400 text-xs my-4 sm:text-base dark:text-gray-600">
                      {guid.continent} Guide
                    </p>
                    <p className="text-justify text-[#818181]">{guid.info.slice(0, 110)}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurGuides;
