import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import RitualCard from "../ritualCard";
import leaf from '/assets/images/ritual-leaf.png';

import "swiper/css/navigation";

const Rituals = ({ data }) => {

    const { subtitle, title, slides } = data

    const [activeIndex, setActiveIndex] = useState(1);
    const totalSlides = slides.length;

    const handleSlideChange = (swiper) => {

        const real = swiper.realIndex % totalSlides;
        setActiveIndex(real + 1);

        const activeSlide = swiper.slides[swiper.activeIndex];
        const prevEl = activeSlide.querySelector(".custom-swiper-button-prev");
        const nextEl = activeSlide.querySelector(".custom-swiper-button-next");

        swiper.params.navigation.prevEl = prevEl;
        swiper.params.navigation.nextEl = nextEl;
        swiper.navigation.init();
        swiper.navigation.update();
    };

    return (
        <section className="rituals-main relative bg-dark-cream py-60 min-1400:py-[92px] overflow-hidden">
            <div class="rituals-leaf absolute left-0 top-0">
                <img src={leaf} alt="leaf" width={249} height={284} className="w-[100px] min-990:w-[150px] min-1400:w-auto" />
            </div>
            <div class="ritual-section relative z-1">
                <div class="ritual-above">
                    <div class="rituals-titles">
                        <div class="sub-title sub-title-no-translate mb-16">
                            <span className="mx-auto after:!left-30">{subtitle}</span>
                        </div>
                        <div class="title text-center max-w-[531px] mx-auto">
                            <h2 className="h4">{title}</h2>
                        </div>
                    </div>
                </div>
                <div class="ritual-swiper-start mt-50 min-1400:mt-84">
                    <Swiper
                        className="ritual-swiper !pt-15 max-576:!pb-80"
                        modules={[Navigation]}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={1.1}
                        spaceBetween={80}
                        onSlideChange={handleSlideChange}
                        onInit={handleSlideChange}
                        breakpoints={{
                            576: {
                                slidesPerView: 1.3,
                                spaceBetween: 80,
                            },
                            768: {
                                slidesPerView: 1.4,
                                spaceBetween: 80,
                            },
                            990: {
                                slidesPerView: 1.6,
                                spaceBetween: 80,
                            },
                            1200: {
                                slidesPerView: 1.8,
                                spaceBetween: 80,
                            },
                            1400: {
                                slidesPerView: 2.2,
                                spaceBetween: 80,
                            },
                            1600: {
                                slidesPerView: 2.65,
                                spaceBetween: 80,
                            }
                        }}
                    >
                        {[...Array(3)].flatMap(() => slides).map((slide, index) => (
                            <SwiperSlide key={`${slide.id}-${index}`} className="relative">
                                <RitualCard {...slide} />
                                <div className="swiper-nav swiper-nav-ritual max-576:mt-30 max-576:absolute max-576:left-50p max-576:translate-x-50mp">
                                    <button className="custom-swiper-button custom-swiper-button-prev min-576:absolute min-576:top-50p min-576:translate-y-50mp min-576:-left-64 z-9">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="27" viewBox="0 0 20 27" fill="none">
                                            <path d="M0.275059 13.0178L6.22138 6.95144C6.33149 6.80165 6.47143 6.69165 6.6412 6.62144C6.81096 6.55122 6.98761 6.53718 7.17113 6.57931C7.35466 6.62144 7.51066 6.70803 7.63913 6.8391C7.7676 6.97016 7.85248 7.12931 7.89378 7.31654C7.93507 7.50378 7.92131 7.68399 7.85248 7.85718C7.78366 8.03037 7.67584 8.17314 7.52902 8.28548L3.16563 12.737H19.0638C19.3024 12.765 19.4997 12.8704 19.6556 13.0529C19.8116 13.2355 19.8896 13.4461 19.8896 13.6848C19.8896 13.9236 19.8116 14.1342 19.6556 14.3167C19.4997 14.4993 19.3024 14.6046 19.0638 14.6327H3.16563L7.54278 19.0982C7.6896 19.2855 7.75613 19.5008 7.74237 19.7442C7.7286 19.9876 7.63684 20.1935 7.46707 20.3621C7.29731 20.5306 7.09314 20.6218 6.85455 20.6359C6.61596 20.6499 6.4049 20.5821 6.22138 20.4323L0.261293 14.3659C0.0777664 14.1787 -0.0117054 13.954 -0.00711632 13.6919C-0.00252724 13.4297 0.0915298 13.205 0.275059 13.0178Z" fill="currentcolor"/>
                                        </svg>
                                    </button>
                                    <button className="custom-swiper-button custom-swiper-button-next min-576:absolute min-576:top-50p min-576:translate-y-50mp min-576:-right-54 z-9">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="27" viewBox="0 0 20 27" fill="none">
                                            <path d="M19.7249 13.0178L13.7786 6.95144C13.6685 6.80165 13.5286 6.69165 13.3588 6.62144C13.189 6.55122 13.0124 6.53718 12.8289 6.57931C12.6453 6.62144 12.4893 6.70803 12.3609 6.8391C12.2324 6.97016 12.1475 7.12931 12.1062 7.31654C12.0649 7.50378 12.0787 7.68399 12.1475 7.85718C12.2163 8.03037 12.3242 8.17314 12.471 8.28548L16.8344 12.737H0.936229C0.697642 12.765 0.500349 12.8704 0.34435 13.0529C0.188351 13.2355 0.110352 13.4461 0.110352 13.6848C0.110352 13.9236 0.188351 14.1342 0.34435 14.3167C0.500349 14.4993 0.697642 14.6046 0.936229 14.6327H16.8344L12.4572 19.0982C12.3104 19.2855 12.2439 19.5008 12.2576 19.7442C12.2714 19.9876 12.3632 20.1935 12.5329 20.3621C12.7027 20.5306 12.9069 20.6218 13.1455 20.6359C13.384 20.6499 13.5951 20.5821 13.7786 20.4323L19.7387 14.3659C19.9222 14.1787 20.0117 13.954 20.0071 13.6919C20.0025 13.4297 19.9085 13.205 19.7249 13.0178Z" fill="currentcolor"/>
                                        </svg>
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* <div className="swiper-nav swiper-nav-ritual mt-40 min-1400:mt-[67px]">
                        <button ref={prevRef} className="custom-swiper-button custom-swiper-button-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="27" viewBox="0 0 20 27" fill="none">
                                <path d="M0.275059 13.0178L6.22138 6.95144C6.33149 6.80165 6.47143 6.69165 6.6412 6.62144C6.81096 6.55122 6.98761 6.53718 7.17113 6.57931C7.35466 6.62144 7.51066 6.70803 7.63913 6.8391C7.7676 6.97016 7.85248 7.12931 7.89378 7.31654C7.93507 7.50378 7.92131 7.68399 7.85248 7.85718C7.78366 8.03037 7.67584 8.17314 7.52902 8.28548L3.16563 12.737H19.0638C19.3024 12.765 19.4997 12.8704 19.6556 13.0529C19.8116 13.2355 19.8896 13.4461 19.8896 13.6848C19.8896 13.9236 19.8116 14.1342 19.6556 14.3167C19.4997 14.4993 19.3024 14.6046 19.0638 14.6327H3.16563L7.54278 19.0982C7.6896 19.2855 7.75613 19.5008 7.74237 19.7442C7.7286 19.9876 7.63684 20.1935 7.46707 20.3621C7.29731 20.5306 7.09314 20.6218 6.85455 20.6359C6.61596 20.6499 6.4049 20.5821 6.22138 20.4323L0.261293 14.3659C0.0777664 14.1787 -0.0117054 13.954 -0.00711632 13.6919C-0.00252724 13.4297 0.0915298 13.205 0.275059 13.0178Z" fill="currentcolor"/>
                            </svg>
                        </button>
                        <button ref={nextRef} className="custom-swiper-button custom-swiper-button-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="27" viewBox="0 0 20 27" fill="none">
                                <path d="M19.7249 13.0178L13.7786 6.95144C13.6685 6.80165 13.5286 6.69165 13.3588 6.62144C13.189 6.55122 13.0124 6.53718 12.8289 6.57931C12.6453 6.62144 12.4893 6.70803 12.3609 6.8391C12.2324 6.97016 12.1475 7.12931 12.1062 7.31654C12.0649 7.50378 12.0787 7.68399 12.1475 7.85718C12.2163 8.03037 12.3242 8.17314 12.471 8.28548L16.8344 12.737H0.936229C0.697642 12.765 0.500349 12.8704 0.34435 13.0529C0.188351 13.2355 0.110352 13.4461 0.110352 13.6848C0.110352 13.9236 0.188351 14.1342 0.34435 14.3167C0.500349 14.4993 0.697642 14.6046 0.936229 14.6327H16.8344L12.4572 19.0982C12.3104 19.2855 12.2439 19.5008 12.2576 19.7442C12.2714 19.9876 12.3632 20.1935 12.5329 20.3621C12.7027 20.5306 12.9069 20.6218 13.1455 20.6359C13.384 20.6499 13.5951 20.5821 13.7786 20.4323L19.7387 14.3659C19.9222 14.1787 20.0117 13.954 20.0071 13.6919C20.0025 13.4297 19.9085 13.205 19.7249 13.0178Z" fill="currentcolor"/>
                            </svg>
                        </button>
                    </div> */}
                    <div className="pagination mt-40 text-center">
                        <p className="font-teachers font-regular text-36 min-576:text-42 min-990:text-46 min-1400:text-50 leading-120p text-secondary-600 uppercase">
                            <span className="text-secondary-900">{String(activeIndex).padStart(2, "0")}</span>
                            <span className="opacity-40">/</span>
                            <span className="opacity-40">{String(totalSlides).padStart(2, "0")}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rituals;