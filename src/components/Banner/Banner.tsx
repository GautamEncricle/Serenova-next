"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
const detailLeaf = "/assets/images/banner-detail-leaf.png";
const arrow = "/assets/images/banner-down-arrow.svg";
const tree = "/assets/images/banner-tree.png";
import { Banner as BannerType } from "../../types/homeTypes";

interface BannerProps {
  data: BannerType;
}

const Banner = ({ data }: BannerProps) => {
  const { bannerImg, bannerTitle, gatewayText } = data;

  const scrollToNextSection = () => {
    const arrowEl = document.querySelector(".banner-gateway-arrow");
    const parentSection = arrowEl?.closest("section");
    const nextSection = parentSection?.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bannerImagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    bannerImagesRef.current.forEach((el, i) => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 250 + Math.random() * 100;

      const fromX = Math.cos(angle) * radius;
      const fromY = Math.sin(angle) * radius;

      const fromRotation = (Math.random() - 0.5) * 180; // -90 to +90 degrees

      gsap.fromTo(
        el,
        {
          x: fromX,
          y: fromY,
          opacity: 0,
          scale: 0.7,
          rotateZ: fromRotation,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotateZ: 0,
          duration: 1.8,
          ease: "power2.inOut",
          delay: i * 0.1,
        }
      );
    });
  }, []);

  return (
    <section className="banner-main relative overflow-hidden pt-10 pb-[42px]">
      <Image
        src={tree}
        alt="tree"
        width={242}
        height={354}
        className="absolute left-0 bottom-18 z-0"
      />
      <div className="container-1657">
        <div className="banner-section relative">
          <div className="banner-images">
            {bannerImg.map((item, index) => (
              <div
                key={index}
                className={`banner-img banner-img-${index + 1} absolute`}
                ref={(el) => {
                  bannerImagesRef.current[index] = el;
                }}>
                <div
                  className="banner-img-inner"
                  ref={(el) => {
                    bannerImagesRef.current[index] = el;
                  }}>
                  <Image
                    src={item.img}
                    alt={`img-${index + 1}`}
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="banner-below relative z-1 pt-[320px] min-576:pt-[210px] min-990:pt-[42px] min-1200:pt-[12px] min-1400:pt-[100px] min-1600:pt-[120px] min-1800:pt-[148px] pb-[160px] min-576:pb-[150px] min-990:pb-12">
            <div className="banner-detail">
              <div className="banner-detail-leaf mb-[13px]">
                <img
                  src={detailLeaf}
                  alt="leaf"
                  width={400}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <div className="banner-title text-center max-w-[320px] min-768:max-w-[430px] min-1200:max-w-[490px] min-1400:max-w-[620px] min-1600:max-w-[730px] mx-auto">
                <h1 className="w-fit mx-auto min-1600:mr-[-31px]">
                  {bannerTitle}
                </h1>
              </div>
            </div>
            <div className="banner-gateway mt-50 min-768:mt-66 min-1200:mt-50 min-1400:mt-[70px] min-1600:mt-[150px]">
              <div className="banner-gateway-text text-center mb-20 min-1200:mb-25 min-1400:mb-[35px] min-1600:mb-[65px]">
                <p className="poppins-300-24">{gatewayText}</p>
              </div>
              <a
                href="/"
                className="banner-gateway-arrow block w-fit mx-auto hover:opacity-70"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToNextSection();
                }}>
                <Image src={arrow} alt="arrow" width={35} height={34} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
