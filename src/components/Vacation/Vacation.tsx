import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { VacationData } from "@/types/aboutTypes";

const arrow = "/assets/images/vacation-arrow.svg";
const leaf = "/assets/images/vacation-leaf.png";

const Vacation = ({ data }: { data: VacationData }) => {
  const { img, subtitle, title, arrowLink, points } = data;

  return (
    <section className="vacation-main bg-dark-cream relative py-60 min-1400:pt-90 min-1400:pb-[110px]">
      <div className="vacation-leaf absolute right-0 -bottom-20 min-1800:bottom-40">
        <Image
          src={leaf}
          alt="leaf"
          width={357}
          height={500}
          className="w-[120px] min-1800:w-auto"
        />
      </div>
      <div className="vacation-inside px-15 min-1600:max-w-[1604px] min-1400:pl-[100px] min-1600:pl-[162px]">
        <div className="vacation-section relative z-1">
          <div className="vacation-start flex flex-col min-990:flex-row gap-y-30 gap-x-40 min-1800:gap-[106px]">
            <div className="vacation-left min-990:flex-[0_0_calc(100%_-_500px)] min-1200:flex-[0_0_calc(100%_-_654px)] min-1800:flex-[0_0_calc(100%_-_720px)]">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full object-cover max-768:w-full"
              />
            </div>
            <div className="vacation-right min-990:flex-[0_0_460px] min-1200:flex-[0_0_614px]">
              <div className="sub-title sub-title-no-translate mb-16">
                <span className="after:!left-[34px]">{subtitle}</span>
              </div>
              <div className="title min-990:max-w-[531px]">
                <h2 className="h4">{title}</h2>
              </div>
              <div
                className="text text-with-mutiple-p mt-[25px] mb-30 min-1400:mb-[57px]"
                dangerouslySetInnerHTML={{ __html: data.text }}></div>
              <a href={arrowLink} className="vacation-arrow inline-block group">
                <Image
                  src={arrow}
                  alt="arrow"
                  width={38}
                  height={30}
                  className="transition-all duration-500 ease-in-out group-hover:-rotate-90"
                />
              </a>
              <div className="vacation-data-list mt-30 min-1400:mt-[43px] w-full min-990:max-w-[583px]">
                <ul className="flex flex-wrap flex-col min-640:flex-row gap-x-30 min-1600:gap-x-60 gap-y-30 min-1600:gap-y-56">
                  {points.map((item, index) => (
                    <li
                      key={index}
                      className="min-640:flex-[0_0_261px] min-990:flex-[0_0_calc(50%_-_15px)] min-1600:flex-[0_0_calc(50%_-_30px)]">
                      <p className="poppins-300-80">
                        {item.number && (
                          <>
                            <CountUp
                              start={0}
                              end={parseInt(item.number.toString(), 10)}
                              duration={3}
                              enableScrollSpy
                              onEnd={() => {}}
                              onStart={() => {}}></CountUp>
                            <span style={{ display: "none" }}>
                              {parseInt(item.number.toString(), 10)}
                            </span>
                          </>
                        )}
                        <span>+</span>
                      </p>
                      <p className="poppins-300-25 pt-18 border-t-[1px] border-solid border-secondary-600">
                        {item.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacation;
