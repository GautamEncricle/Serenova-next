import React from "react";
import Image from "next/image";
import { WeDoData } from "@/types/aboutTypes";

const leaf = "/assets/images/we-do-leaf.png";

const WeDo = ({ data }: { data: WeDoData }) => {
  const { img1, img2, imgWheel, subtitle, title, text, btn, points } = data;

  return (
    <section className="do-main relative py-60 min-1400:py-[87px]">
      <div className="do-leaf absolute left-0 bottom-0 min-1400:bottom-[-100px] max-990:hidden">
        <img
          src={leaf}
          alt="leaf"
          width={281}
          height={297}
          className="w-[120px] min-1400:w-auto"
        />
      </div>
      <div className="container-1335">
        <div className="do-section relative z-1">
          <div className="do-start">
            <div className="do-above flex flex-col min-768:flex-row gap-y-30 gap-x-40 min-1400:gap-[93px]">
              <div className="do-above-left min-768:flex-[0_0_350px] min-1400:flex-[0_0_470px]">
                <div className="do-above-left-inside relative">
                  <Image
                    src={img1.src}
                    alt={img1.alt}
                    width={500}
                    height={300}
                    className="w-[calc(100%_-_40px)] min-768:w-full object-cover"
                  />
                  <a href={imgWheel.link}>
                    <Image
                      src={imgWheel.src}
                      alt={imgWheel.alt}
                      width={185}
                      height={185}
                      className="img-wheel absolute w-100 min-1400:w-[185px] h-auto aspect-square right-20 min-768:-right-30 min-990:-right-40 min-1400:right-[-92px] -bottom-40 min-768:-bottom-30 min-990:-bottom-40 min-1400:bottom-[-92px]"
                    />
                  </a>
                </div>
              </div>
              <div className="do-above-right min-768:flex-[0_0_calc(100%_-_390px)] min-1400:flex-[0_0_calc(100%_-_611px)]">
                <div className="sub-title sub-title-no-translate mb-16">
                  <span className="after:!left-[23px]">{subtitle}</span>
                </div>
                <div className="title">
                  <h2 className="h4">{title}</h2>
                </div>
                <div className="text mt-22">
                  <p>{text}</p>
                </div>
                <div className="do-above-btn mt-22 min-1400:mt-32">
                  <a href={btn.link} className="btn btn-gold-simple">
                    {btn.text}
                  </a>
                </div>
              </div>
            </div>
            <div className="do-below flex flex-col-reverse min-768:flex-row min-768:justify-between min-768:items-center gap-30 min-990:-mt-30 min-1400:mt-[-100px] max-990:mt-40">
              <div className="do-below-left">
                <div className="do-below-list correct-ul best-list min-990:pt-22">
                  <ul>
                    {points.map((item, index) => (
                      <li key={index} className="text-black">
                        {item.li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="do-below-right min-768:flex-[0_0_calc(100%_-_390px)] min-990:flex-[0_0_calc(100%_-_420px)] min-1400:flex-[0_0_701px]">
                <Image
                  src={img2.src}
                  alt={img2.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeDo;
