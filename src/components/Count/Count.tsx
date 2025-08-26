import React from "react";
import CountUp from "react-countup";
import { CountData } from "@/types/contactTypes";

interface CountProps {
  data: CountData;
}

const Count: React.FC<CountProps> = ({ data }) => {
  const { counts } = data;

  return (
    <section className="count-main pt-30 pb-60 min-1400:pt-16 min-1400:pb-[147px]">
      <div className="container-1330">
        <div className="count-section">
          <ul className="flex flex-wrap flex-col min-576:flex-row justify-center items-center gap-y-20 gap-x-50 min-768:gap-x-80 min-1400:gap-x-[140px]">
            {counts.map((item, index) => (
              <li
                key={index}
                className="relative after:content-[''] after:absolute after:top-50p after:-right-24 min-768:after:-right-40 min-1400:after:-right-70 after:translate-y-50mp after:w-[1px] after:h-[52px] after:bg-secondary-900 last:after:hidden max-576:after:hidden">
                <CountUp
                  start={0}
                  end={Number(item.number)}
                  duration={3}
                  enableScrollSpy
                  className="font-teachers font-normal text-80 min-768:text-100 min-990:text-120 min-1400:text-[150px] leading-120p text-[rgba(0,_0,_0,_0.1)] tracking-[7.5px] capitalize"></CountUp>
                <p className="absolute left-50p top-50p translate-50mp z-1 font-poppins font-light text-16 min-768:text-18 min-990:text-20 min-1400:text-22 leading-150p text-black tracking-[1.1px] capitalize">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Count;
