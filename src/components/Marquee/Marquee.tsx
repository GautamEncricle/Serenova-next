import React from 'react';
import marqueeData from '../../data/marquee.json';

const Marquee = () => {

    const {
        marquee
    } = marqueeData;

    return (
        <section className='marquee-start bg-cream pt-30 min-1400:pt-50'>
            <div class="marquee">
                <div class="track">
                    <div class="content">
                        <ul class="gap-[20px] min-640:gap-[30px] min-990:gap-[50px] min-1400:gap-[100px]">
                            {marquee.map((item, index) => (
                                <li key={index}>
                                    <p className='font-[250] text-[40px] min-640:text-[50px] min-990:text-[80px] min-1400:text-[150px] min-1600:text-[200px] leading-150p text-primary-900'>{item.label}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Marquee;