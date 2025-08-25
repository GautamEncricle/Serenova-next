import React from "react";
import Image from "next/image";
import { TravelerItem } from "@/types/aboutTypes";

const arrow = "/assets/images/traveler-arrow-svg.svg";

const TravelerCard = ({
  link,
  icon,
  title,
  text,
  tag,
  showReadMore = true,
}: TravelerItem & { showReadMore?: boolean }) => {
  return (
    <div className="traveler-card-main">
      <a href={link} className="traveler-card-section block group">
        {icon?.src && (
          <div className="traveler-card-icon flex justify-center items-center w-[129px] h-[128px] mx-auto mb-22 relative after:content-[''] after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-[url('/assets/images/traveler-card-icon-bg.svg')] after:bg-no-repeat after:bg-[length:100%_100%]">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={129}
              height={128}
              className="relative z-1 object-contain"
            />
          </div>
        )}
        {title && (
          <div className="traveler-card-title text-center">
            <h5>{title}</h5>
          </div>
        )}
        {tag && (
          <div className="traveler-card-tag text-center mt-[9px]">
            <p className="text-grey-400">{tag}</p>
          </div>
        )}
        {text && (
          <div className="traveler-card-text text-center mt-[9px]">
            <p>{text}</p>
          </div>
        )}
        {showReadMore && (
          <div className="traveler-card-arrow flex justify-center items-center gap-12 mt-22 min-1200:mt-34">
            <p className="text-black transition-all duration-300 ease-in-out max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px]">
              Read More
            </p>
            <Image src={arrow} alt="arrow" width={21} height={21} />
          </div>
        )}
      </a>
    </div>
  );
};

export default TravelerCard;
