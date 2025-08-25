import React from 'react';

const JournalCard = ({ link, img, subtitle, title, points }) => {
    return (
        <div className='journal-card-main'>
            <a href={link} className="journal-card-section group block">
                <div className="journal-card-img transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:w-[calc(100%_-_8px)] after:h-[calc(100%_+_16px)] after:left-0 after:top-[-8px] after:border-[1px] after:border-solid after:border-secondary-800 after:opacity-0 group-hover:pl-8 group-hover:after:opacity-100">
                    <img src={img.src} alt={img.alt} width="auto" height="auto" className="w-full h-auto aspect-[4/3] object-cover transition-all duration-300 ease-in-out" />
                </div>
                <div className="journal-card-below mt-16">
                    <div className="journal-card-subtitle mb-8">
                        <p className='leading-118p75p text-primary-800'>{subtitle}</p>
                    </div>
                    <div className="journal-card-title">
                        <p className='poppins-300-20'>{title}</p>
                    </div>
                    <div className="journal-card-list mt-16">
                        <ul className='flex flex-wrap gap-y-8 gap-x-24'>
                            {points.map((item, index) => (
                                <li key={index}  className="poppins-400-14 relative after:content-[''] after:absolute after:top-50p after:translate-y-50mp after:right-[-14px] after:w-[3px] after:h-[3px] after:rounded-50p after:bg-secondary-600 last:after:hidden">{item.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default JournalCard;