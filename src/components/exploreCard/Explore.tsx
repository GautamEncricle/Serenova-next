"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ExploreCardProps {
  link: string;
  img: { src: string | StaticImageData; alt: string };
  title: string;
  text: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  link,
  img,
  title,
  text,
}) => {
  return (
    <a href={link} className="explore-card-main group block">
      <div className="explore-card-image relative">
        <Image
          src={img.src}
          alt={img.alt}
          width={400}
          height={412}
          className="w-full h-auto object-cover"
        />
        <div className="explain-card-details text-center absolute bottom-0 left-0 z-1 p-4">
          <div className="explain-card-title">
            <p className="text-white font-semibold">{title}</p>
          </div>
          <div className="explain-card-text">
            <p className="text-white">{text}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ExploreCard;
