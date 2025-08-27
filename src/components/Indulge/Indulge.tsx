"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ImageData {
  src: string;
  alt: string;
}

interface IndulgeData {
  subtitle: string;
  title: string;
  images: ImageData[];
}

const Indulge = ({ data } : {data: IndulgeData}) => {

    const { subtitle, title, images } = data;

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const mainSwiperRef = useRef<SwiperType | null>(null);

    const goNext = () => {
        if (mainSwiperRef.current) mainSwiperRef.current.slideNext();
    };

    const goPrev = () => {
        if (mainSwiperRef.current) mainSwiperRef.current.slidePrev();
    };

    return (
        <section className="indulge-main py-60 min-1400:py-[147px] overflow-hidden">
            <div className="container-1608">
                <div className="indulge-section">
                    <div className="indulge-start">
                        <div className="sub-title sub-title-no-translate mb-16">
                            <span className='after:!left-[84px]'>{subtitle}</span>
                        </div>
                        <div className="title mb-[43px]">
                            <h2 className='h4'>{title}</h2>
                        </div>
                        <div className="swipers-main-start min-990:flex min-990:gap-x-40 min-1600:gap-x-98 max-w-full w-full mx-auto relative">
                            <div className="swiper-left min-990:flex-[0_0_calc(100%_-_167px)] min-990:w-[calc(100%_-_167px)] min-1600:flex-[0_0_calc(100%_-_225px)] min-1600:w-[calc(100%_-_225px)]">
                                <Swiper
                                    loop={true}
                                    onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                                    onSlideChange={(swiper) => {
                                        if (thumbsSwiper) {
                                        thumbsSwiper.slideTo(swiper.realIndex); // keep thumbs in sync
                                        }
                                    }}
                                    thumbs={{
                                        swiper:
                                        thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                                    }}
                                    modules={[FreeMode, Thumbs]}
                                    className="mySwiper2 mySwiperIndulge2"
                                >
                                    {images.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={image.src} alt={image.alt} width="auto" height="auto" className="w-full h-auto aspect-[1.66/1] object-cover" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="swiper-right min-990:flex-[0_0_127px] min-990:w-[127px] min-990:h-[420px] min-1200:h-[540px] min-1400:h-[675px] min-990:absolute min-990:right-0 min-990:top-0 z-1 max-990:mt-30">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={18}
                                    slidesPerView={2}
                                    freeMode={true}
                                    slideToClickedSlide={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Thumbs]}
                                    className="mySwiper mySwiperIndulge min-990:h-full"
                                    breakpoints={{
                                        576: {
                                            slidesPerView: 3,
                                            spaceBetween: 18,
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 18,
                                        },
                                        990: {
                                            slidesPerView: 4,
                                            spaceBetween: 18,
                                            direction: "vertical"
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                            spaceBetween: 18,
                                            direction: "vertical"
                                        },
                                        1400: {
                                            slidesPerView: 6,
                                            spaceBetween: 18,
                                            direction: "vertical"
                                        }
                                    }}
                                >
                                    {images.map((image, index) => (
                                        <SwiperSlide key={index} className="cursor-pointer relative after:content-[''] after:absolute after:w-[calc(100%_-_4px)] after:h-[calc(100%_-_4px)] after:left-0 after:top-0 after:border-[1px] after:border-solid after:border-secondary-900 after:opacity-0 after:transition-all after:duration-300 after:ease-in-out max-990:!h-auto">
                                            <img src={image.src} alt={image.alt} width="auto" height="auto" className="w-full h-full min-1400:h-auto min-1400:aspect-[1.27/1] object-cover inline-block pr-4 transition-all duration-300 ease-in-out" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <button
                                    onClick={goPrev}
                                    className="hidden"
                                >
                                    Skip
                                </button>
                                <button
                                    onClick={goNext}
                                    className="mt-24 min-1600:mt-48 flex mx-auto text-center font-poppins font-regular text-18 leading-[27px] text-black transition-all duration-300 ease-in-out cursor-pointer hover:text-secondary-800 relative after:content-[''] after:absolute after:w-full after:h-[1px] after:-bottom-4 after:left-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:bg-secondary-800"
                                >
                                    Skip
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Indulge;