import React from 'react';

interface AdvantageItem {
  li: string;
}

interface PackageCardProps {
  link: string;
  name: string;
  price: string;
  time: string;
  advantages: AdvantageItem[];
}

const PackageCard = ({ link, name, price, time, advantages } : PackageCardProps) => {
    return (
        <a href={link} className='package-item group bg-dark-cream block max-768:w-fit max-768:mx-auto'>
            <div className="package-above p-30 min-1600:p-60 max-990:px-20">
                <div className="teachers-500-25 text-center mb-4">
                    <p>{name}</p>
                </div>
                <div className="poppins-500-55 text-center">
                    <p>{price}</p>
                </div>
                <div className="poppins-400-18 text-center">
                    <p>{time}</p>
                </div>
                <div className="package-offer-list correct-ul pt-30 min-1600:pt-[37px] mt-30 min-1600:mt-[56px] border-t-[1px] border-solid border-secondary-600">
                    <ul>
                        {advantages.map((item, index) => (
                            <li key={index} className='text-black mb-6 min-1400:mb-12 last:mb-0'>{item.li}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="package-below flex justify-center items-center transition-all duration-300 ease-in-out bg-secondary-600 group-hover:bg-secondary-800">
                <p className="package-button px-20 py-10 font-teachers font-semibold text-18 leading-122p text-white">GET NOW</p>
            </div>
        </a>
    )
}

export default PackageCard;