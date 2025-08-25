import React from 'react';

const ExploreCard = ({ link, img, title, text }) => {
    return (
        <a href={link} className='explore-card-main group block min-768:flex-[0_0_flex(50%_-_15px)] min-1400:flex-[0_0_flex(50%_-_24px)]'>
            <div class="explore-card-image relative after:content-[''] after:absolute after:w-[calc(100%_-_13px)] after:h-[calc(100%_-_13px)] after:top-0 after:left-0 after:pointer-events-none after:border-[1px] after:border-solid after:border-[#735C2B] after:transition-all after:duration-300 after:ease-in-out after:opacity-0 hover:after:opacity-100 before:content-[''] before:absolute before:w-[calc(100%_-_13px)] before:h-[229px] before:max-w-full before:left-13 before:bottom-0 before:pointer-events-none before:bg-[linear-gradient(0deg,_#000_0%,_rgba(0,_0,_0,_0.00)_100%)] before:opacity-90">
                <img src={img.src} alt={img.alt} width="auto" height="auto" className='w-full h-auto aspect-[0.97/1] object-cover pt-13 pl-13' />
                <div class="explain-card-details text-center absolute w-[calc(100%_-_13px)] h-w-[calc(100%_-_13px)] bottom-0 left-13 z-1 px-20 min-768:px-30 min-1600:px-64 pb-30 min-1600:pb-42">
                    <div class="explain-card-title">
                        <p className='poppins-600-23 text-white'>{title}</p>
                    </div>
                    <div class="explain-card-title transition-all duration-300 ease-in-out min-990:overflow-hidden min-990:max-h-0 min-990:group-hover:max-h-[500px] min-990:opacity-0 min-990:group-hover:opacity-100 pt-8 min-990:pt-0 min-990:group-hover:pt-8">
                        <p className='leading-[156.25%] text-white'>{text}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ExploreCard;