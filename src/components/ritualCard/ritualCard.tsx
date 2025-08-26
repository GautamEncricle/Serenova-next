import React from "react";
import Image from "next/image";

interface RitualCardProps {
  img: string;
  title: string;
  text: string;
}

const RitualCard = ({ img, title, text }: RitualCardProps) => {
  return (
    <div className="ritual-card-main">
      <div className="ritual-card-section">
        <div className="ritual-card-image relative after:content-[''] after:absolute after:w-full after:h-[345px] after:max-h-full after:bottom-0 after:left-0 after:bg-[linear-gradient(0deg,_#000_0%,_rgba(0,_0,_0,_0.00)_100%)] after:transition-all after:duration-300 after:ease-in-out after:opacity-0">
          <Image
            src={img}
            alt={title}
            layout="responsive"
            width={249}
            height={284}
          />
          <div className="ritual-card-details absolute w-full h-full bottom-0 left-0 z-1 flex flex-col justify-end px-30 py-30 min-1600:py-42 transition-all duration-300 ease-in-out">
            <div className="ritual-card-details-inside max-w-[560px] mx-auto">
              <div className="ritual-card-title text-center text-white mb-14 min-576:mb-18">
                <h4 className="text-white">{title}</h4>
              </div>
              <div
                className="ritual-card-text text-with-mutiple-p-18 text-center text-white max-w-[450px] mx-auto max-576:text-14"
                dangerouslySetInnerHTML={{ __html: text }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RitualCard;
