"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// Contents
import { contentBenefits } from "@/content";
import HomeCard from "./home-card";

const HomeSlider = () => {
  const items = contentBenefits;

  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        360: {
          slidesPerView: "auto",
          spaceBetween: 24,
        },
        640: {
          slidesPerView: "auto",
          spaceBetween: 24,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: "auto",
          spaceBetween: 24,
        },

        1140: {
          slidesPerView: "auto",
          spaceBetween: 24,
        },
      }}
      className=""
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <HomeCard title={item.title} body={item.body} media={item.media} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
