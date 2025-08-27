"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TravelerCard from "../travelerCard/travelerCard";
import { TravelerData } from "@/types/aboutTypes";

interface TravelerProps {
  data: TravelerData;
  titleWidth?: string;
  showReadMore?: boolean;
}

const Traveler = ({ data, titleWidth, showReadMore = true }: TravelerProps) => {
  const { subtitle, title, travels, note } = data;

  return (
    <section className="traveler-main pt-60 pb-60 min-1400:pb-[131px]">
      <div className="container-1605">
        <div className="traveler-section">
          <div className="traveler-start">
            <div className="sub-title mb-16">
              <span className="mx-auto">{subtitle}</span>
            </div>
            <div
              className={`title max-w-[500px] min-768:max-w-[550px] min-990:max-w-[620px] min-1200:max-w-[${titleWidth}] mx-auto text-center`}>
              <h2 className="h4">{title}</h2>
            </div>
            <div className="traveler-swiper-start mt-50 min-1400:mt-[81px]">
              <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  1800: {
                    slidesPerView: 3,
                    spaceBetween: 69,
                  },
                }}
                className="traveler-swiper common-swiper-pagination">
                {[...Array(1)]
                  .flatMap(() => travels)
                  .map((travel, index) => (
                    <SwiperSlide key={index}>
                      <TravelerCard {...travel} showReadMore={showReadMore} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            {note && (
              <div className="traveler-note teachers-500-16 text-center max-w-[745px] mx-auto mt-40 min-1400:mt-[85px]">
                <p>{note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traveler;
