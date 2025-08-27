"use client";

import React from "react";
import Image from "next/image";
const aboutLeaf = "/assets/images/about-leaf.png";
import { About as AboutType } from "../../types/homeTypes";

interface AboutProps {
  data: AboutType;
  leafPosition?: "default" | "below" | "hidden";
  containerSize?: "default" | "small";
  showButton?: boolean;
  suntitletreeleft?: string;
  bgColor?: string;
}

const About = ({
  data,
  leafPosition = "default",
  containerSize = "default",
  showButton = true,
  suntitletreeleft,
  bgColor,
}: AboutProps) => {
  const { subtitle, text, btnText, btnURL } = data;

  const leafPositionClass =
    {
      default: "top-20 min-990:top-60 min-1400:top-100",
      below: "max-990:hidden min-990:-bottom-40 min-1800:bottom-[-240px]",
      hidden: "hidden",
    }[leafPosition] || "";

  const leafPositionWidth =
    {
      default:
        "w-[150px] min-768:w-[200px] min-990:w-[250px] min-1400:w-[450px] min-1600:w-auto",
      below:
        "w-[150px] min-768:w-[200px] min-990:w-[150px] min-1400:w-[250px] min-1800:w-[403px]",
      hidden: "hidden",
    }[leafPosition] || "";

  const containeSizeDefine =
    {
      default: "container-1610",
      small:
        "px-15 min-1400:max-w-[1375px] min-1600:max-w-[1537px] min-1400:pl-[100px] min-1600:pl-[262px]",
    }[containerSize] || "";

  return (
    <section
      className={`about-main relative ${bgColor} py-60 min-1400:py-[92px]`}>
      {leafPosition !== "hidden" && (
        <div
          className={`about-leaf absolute right-0  ${leafPositionClass} z-0`}>
          <img
            src={aboutLeaf}
            alt="leaf"
            width={573}
            height={441}
            className={`${leafPositionWidth}`}
          />
        </div>
      )}
      <div className={`${containeSizeDefine}`}>
        <div className="about-section relative z-1">
          <div className="about-start">
            <div className="sub-title sub-title-no-translate mb-[17px]">
              <span className={`${suntitletreeleft}`}>{subtitle}</span>
            </div>
            <div className="about-title h3-title">
              <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
            </div>
            <div
              className={`about-details max-w-[1090px] min-1600:max-w-[1194px] flex flex-col-reverse min-990:flex-row ${
                showButton
                  ? "min-990:justify-between mt-[17px] min-990:mt-[-8px]"
                  : "min-990:justify-end mt-[17px] min-990:mt-34"
              } min-990:items-end gap-20 min-990:gap-[110px] min-1600:gap-[220px]`}>
              {showButton && (
                <div className="about-btn flex-[0_0_auto]">
                  <a href={btnURL} className="btn btn-gold-simple">
                    {btnText}
                  </a>
                </div>
              )}
              <div
                className={`about-text ${
                  showButton ? "" : "min-990:max-w-[832px]"
                }`}>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
