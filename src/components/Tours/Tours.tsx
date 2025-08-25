import React from "react";
import Image, { StaticImageData } from "next/image";
import TourCard from "../tourCard/tourCard";
const leaf = "/assets/images/tour-leaf.png";
const tree = "/assets/images/tour-tree.png";

const Tours = ({
  data,
  showTree = true,
}: {
  data: any;
  showTree?: boolean;
}) => {
  const { subtitle, title, tours, btn } = data;

  return (
    <section className="tours-main relative bg-dark-cream py-60 min-1800:pt-[130px] min-1800:pb-[92px]">
      <div className="tour-leaf absolute bottom-0 left-0">
        <Image
          src={leaf}
          alt="leaf"
          width={207}
          height={327}
          className="w-[80px] min-1400:w-[100px] min-1800:w-auto"
        />
      </div>
      <div
        className={`tour-tree absolute top-40 min-1600:top-[116px] right-0 max-990:hidden ${
          showTree ? "min-990:block" : "min-990:hidden"
        }`}>
        <Image
          src={tree}
          alt="tree"
          width={293}
          height={350}
          className="w-[150px] min-1600:w-auto"
        />
      </div>
      <div className="container-1310">
        <div className="tours-section relative z-1">
          <div className="tours-start">
            <div className="tours-subtitle sub-title sub-title-no-translate mb-[17px]">
              <span className="mx-auto after:!left-12">{subtitle}</span>
            </div>
            <div className="tours-title text-center">
              <h2 className="h4">{title}</h2>
            </div>
            <div className="tours-list mt-40 min-1400:mt-62 grid grid-cols-1 min-768:grid-cols-2 min-1200:grid-cols-3 gap-x-30 min-1400:gap-x-40 gap-y-30 min-1400:gap-y-62">
              {tours.map((tour: any) => (
                <TourCard key={tour.id} {...tour} />
              ))}
            </div>
            {btn && (
              <div className="tours-btn mt-40 min-1400:mt-62">
                <a href={btn.link} className="btn btn-gold-simple mx-auto">
                  {btn.btnText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
