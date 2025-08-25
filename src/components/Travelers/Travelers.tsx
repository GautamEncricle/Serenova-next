import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import TravelerCard from '../travelerCard';

const Traveler = ({ data, titleWidth, showReadMore = true }) => {

    const { subtitle, title, travels, note } = data;

    return (
        <section className='traveler-main pt-60 pb-60 min-1400:pb-[131px]'>
            <div class="container-1605">
                <div class="traveler-section">
                    <div class="traveler-start">
                        <div class="sub-title mb-16">
                            <span className='mx-auto'>{subtitle}</span>
                        </div>
                        <div class={`title max-w-[500px] min-768:max-w-[550px] min-990:max-w-[620px] min-1200:max-w-[${titleWidth}] mx-auto text-center`}>
                            <h2 className='h4'>{title}</h2>
                        </div>
                        <div class="traveler-swiper-start mt-50 min-1400:mt-[81px]">
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
                                    }
                                }}
                                className='traveler-swiper common-swiper-pagination'
                            >
                                {[...Array(1)].flatMap(() => travels).map((travel, index) => (
                                    <SwiperSlide key={index}>
                                        <TravelerCard {...travel} showReadMore={showReadMore} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        {note && (
                            <div class="traveler-note teachers-500-16 text-center max-w-[745px] mx-auto mt-40 min-1400:mt-[85px]">
                                <p>{note}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Traveler;