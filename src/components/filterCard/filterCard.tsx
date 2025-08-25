import React from 'react';
import tick from '/assets/images/filter-tag-tick.svg';

const FilterCard = ({ link, img, title, tags, description }) => {
    return (
        <a href={link} className='filter-card-main group block'>
            <div class="filter-card-section flex flex-col min-768:flex-row max-990:items-center min-1200:items-center gap-30 min-1600:gap-52">
                <div class="filter-card-image flex-[0_0_calc(49%_-_15px)] 768:max-1200:flex-[0_0_calc(40%_-_15px)] min-1600:flex-[0_0_calc(49%_-_26px)]">
                    <div className="filter-card-image-inside 990:max-1200:h-full relative after:content-[''] after:absolute after:w-full after:h-full after:-top-6 min-990:after:-top-13 after:-left-6 min-990:after:-left-13 after:pointer-events-none after:border-[1px] after:border-solid after:border-[#735C2B] after:transition-all after:duration-300 after:ease-in-out after:opacity-0 group-hover:after:opacity-100">
                        <img src={img} alt={title} width="auto" height="auto" className='w-full h-auto 990:max-1200:h-full min-1200:h-auto aspect-[1.54/1] object-cover' />
                    </div>
                </div>
                <div class="filter-card-details flex-[0_0_calc(51%_-_15px)] 768:max-1200:flex-[0_0_calc(60%_-_15px)] min-1600:flex-[0_0_calc(51%_-_26px)] flex flex-col justify-center">
                    <div class="filter-card-title">
                        <h4 className='990:max-1200:text-30'>{title}</h4>
                    </div>
                    <div class="filter-card-tags my-12 min-1200:mb-[21px]">
                        <ul className='flex flex-wrap items-center gap-y-4 gap-x-12'>
                            {tags.map((tag, index) => (
                                <li key={index} className='flex items-center gap-4'>
                                    <img src={tick} alt="tick" width={22} height={22} />
                                    <p className='text-black'>{tag}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div class="filter-card-text">
                        <p className='text-grey-400 990:max-1200:leading-150p'>{description}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default FilterCard;