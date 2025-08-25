import React from "react";
import Image from "next/image";
const arrow = "/assets/images/service-arrow-next.svg";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  altImage: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  altImage,
}: ServiceCardProps) => {
  return (
    <div className="service-card-item">
      <a
        href="/"
        className="service-card-inside group px-20 min-1400:px-[39px] py-30 min-1400:pt-[71px] min-1400:pb-[46px] flex flex-col items-center text-center border-[1px] border-solid border-secondary-600 relative h-full after:content-[''] after:absolute after:w-full after:h-full after:top-[-8px] min-1400:after:top-[-13px] after:left-[-8px] min-1400:after:left-[-13px] after:border-[1px] after:border-solid after:border-secondary-900 after:pointer-events-none after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100">
        <div className="service-card-item-icon mb-20 min-1400:mb-32">
          <Image
            src={image}
            alt={altImage}
            width={64}
            height={64}
            className="w-[64px] h-auto aspect-square object-contain"
          />
        </div>
        <div className="service-card-item-title">
          <h6 className="text-secondary-900 transition-all duration-300 ease-in-out group-hover:text-black">
            {title}
          </h6>
        </div>
        <div className="service-card-item-text mt-14">
          <p className="text-grey-400 leading-150p">{description}</p>
        </div>
        <div className="service-card-item-arrow mt-20 min-1400:mt-[27px]">
          <Image src={arrow} alt="arrow" width={18} height={22} />
        </div>
      </a>
    </div>
  );
};

export default ServiceCard;
