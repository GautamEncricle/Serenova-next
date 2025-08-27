import React from 'react';

interface PointItem {
  label: string;
  value: string;
}

interface ImageData {
  src: string;
  alt: string;
}

interface TourCardProps {
  link: string;
  img: ImageData;
  title: string;
  subtitle: string;
  points?: PointItem[];
}

const TourCard = ({ link, img, title, subtitle, points = [] }: TourCardProps) => {
  return (
    <div className="tour-card-main">
      <a href={link} className="tour-card-section block hover:scale-[1.01]">
        <div className="tour-card-img">
          <img src={img.src} alt={img.alt} width="auto" height="auto" className='w-full h-auto aspect-[1.34/1] object-cover' />
        </div>
        <div className="tour-card-below bg-body px-[35px] py-22">
          <div className="tour-card-title">
            <p className='teachers-400-19'>{title}</p>
          </div>
          <div className="tour-card-subtitle mt-[5px]">
            <p className='leading-125p text-secondary-600'>{subtitle}</p>
          </div>
          {points.length > 0 && (
            <div className="tour-card-list mt-16">
              <ul>
                {points.map((item, index) => (
                  <li key={index} className='text-14 min-1400:text-16 leading-175p flex justify-between items-center gap-4 py-[7px] border-b-[1px] border-solid border-secondary-600 first:pt-0 last:pb-0 last:border-b-0'>
                    <p className='text-black'>{item.label}</p>
                    <p className='text-secondary-700 text-right'>{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </a>
    </div>
  )
}

export default TourCard;