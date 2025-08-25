import React from 'react';
import arrow from '/assets/images/traveler-arrow-svg.svg';

const TravelerCard = ({ link, icon, title, text, tag, showReadMore = true }) => {
    return (
        <div className="traveler-card-main">
            <a href={link} className="traveler-card-section block group">
                {icon?.src && (
                    <div class="traveler-card-icon flex justify-center items-center w-[129px] h-[128px] mx-auto mb-22 relative after:content-[''] after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-[url('/assets/images/traveler-card-icon-bg.svg')] after:bg-no-repeat after:bg-[length:100%_100%]">
                        <img src={icon.src} alt={icon.alt} width="auto" height="auto" className='relative z-1 object-contain' />
                    </div>
                )}
                {title && (
                    <div class="traveler-card-title text-center">
                        <h5>{title}</h5>
                    </div>
                )}
                {tag && (
                    <div className="traveler-card-tag text-center mt-[9px]">
                        <p className='text-grey-400'>{tag}</p>
                    </div>
                )}
                {text && (
                    <div class="traveler-card-text text-center mt-[9px]">
                        <p>{text}</p>
                    </div>
                )}
                {showReadMore && (
                    <div class="traveler-card-arrow flex justify-center items-center gap-12 mt-22 min-1200:mt-34">
                        <p className='text-black transition-all duration-300 ease-in-out max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px]'>Read More</p>
                        <img src={arrow} alt="arrow" width={21} height={21} />
                    </div>
                )}
            </a>
        </div>
    )
}

export default TravelerCard;