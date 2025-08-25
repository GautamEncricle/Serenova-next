"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";

const Companies = ({ data }: { data: any }) => {
  const { companies } = data;

  return (
    <section className="companies-main bg-dark-cream py-30 min-1400:py-[45px]">
      <div className="container-1290">
        <div className="companies-section">
          <Swiper
            className="companies-slider"
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}>
            {companies.map((item: any, index: any) => (
              <SwiperSlide key={index} className="companies-slide">
                <a
                  href={item.link}
                  className="companies-slide-inside flex justify-center items-center w-fit mx-auto">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-w-[120px] h-auto object-contain"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Companies;
