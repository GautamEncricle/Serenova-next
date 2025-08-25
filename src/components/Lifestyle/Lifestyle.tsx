import React from "react";
import Image from "next/image";
import { Lifestyle as LifestyleType } from "@/types/homeTypes";

interface LifestyleProps {
  data: LifestyleType;
}

const Lifestyle = ({ data }: LifestyleProps) => {
  const { bg, subtitle, title, text, btn1, btn2 } = data;
  const bgSrc = typeof bg.src === "string" ? bg.src : bg.src.src; // Ensure compatibility with Image component

  return (
    <section className="lifestyle-main relative py-60 min-1400:py-[152px]">
      <div className="lifestyle-bg absolute w-full h-full top-0 left-0">
        <div className="lifestyle-bg-inside h-full relative after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[rgba(0,_0,_0,_0.2)]">
          <Image
            src={bgSrc}
            alt={bg.alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="lifestyle-section relative z-1 max-w-[750px] mx-auto px-15">
        <div className="sub-title sub-title-no-translate mb-[11px]">
          <span className="mx-auto !text-white after:!left-[21px] after:!bg-[url('/assets/images/subtitle-tree-white.svg')]">
            {subtitle}
          </span>
        </div>
        <div className="title text-center">
          <h3 className="font-medium text-white tracking-[2.25px]">{title}</h3>
        </div>
        <div className="text text-center mt-12">
          <p className="text-white">{text}</p>
        </div>
        <div className="lifestyle-btns mt-32 flex flex-wrap justify-center items-center gap-x-24 gap-y-16">
          <a href={btn1.link} className="btn btn-simple-white">
            {btn1.text}
          </a>
          <a href={btn2.link} className="btn btn-white">
            {btn2.text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
