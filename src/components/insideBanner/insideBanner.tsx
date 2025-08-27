"use client";

import React from "react";
import Image from "next/image";

const InsideBanner = ({ bg, title }: any) => {
  return (
    <section className="ibanner-main relative pt-[336px] pb-40 overflow-hidden">
      <div className="ibanner-bg absolute w-full h-full left-0 top-0">
        <div className="ibanner-inside relative h-full after:content-[''] after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-[rgba(0,_0,_0,_0.25)]">
          <Image
            src={bg}
            alt="Background"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="container-1680">
        <div className="ibanner-section relative z-1">
          <div className="inner-banner-subtitle text-center">
            <p className="text-white">Serenova</p>
          </div>
          <div className="ibaner-title text-center -mt-2">
            <h2 className="text-white">{title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideBanner;
