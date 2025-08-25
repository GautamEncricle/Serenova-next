import React from "react";
import Image from "next/image";
import { PlacesData } from "@/types/aboutTypes";

const tree = "/assets/images/places-tree.png";

const Places = ({ data }: { data: PlacesData }) => {
  const { subtitle, title, btn, text, img1, img2 } = data;

  return (
    <section className="places-main relative bg-dark-cream py-60 min-1400:py-[110px]">
      <div className="places-tree absolute bottom-0 left-0 max-990:hidden">
        <Image
          src={tree}
          alt="tree"
          width={372}
          height={403}
          className="w-[200px] min-1600:w-[250px] min-1800:w-auto"
        />
      </div>
      <div className="container-1605">
        <div className="places-section relative z-1">
          <div className="places-start flex flex-col min-990:flex-row gap-y-30 gap-x-30 min-1400:gap-x-60">
            <div className="places-left min-990:flex-[0_0_calc(48%_-_15px)] min-1400:flex-[0_0_calc(48%_-_30px)]">
              <div className="sub-title sub-title-no-translate mb-16">
                <span className="after:!left-[35px]">{subtitle}</span>
              </div>
              <div className="title min-990:max-w-[445px] min-1200:max-w-[531px]">
                <h2 className="h4">{title}</h2>
              </div>
              <div className="places-details mt-30 min-1400:mt-50 flex flex-col-reverse min-1400:flex-row min-1400:items-end min-1400:justify-between gap-20">
                <div className="places-btn">
                  <a href={btn.link} className="btn btn-gold-simple">
                    {btn.text}
                  </a>
                </div>
                <div className="places-text min-1400:flex-[0_0_380px] min-1600:flex-[0_0_441px] min-1600:pb-12">
                  <p>{text}</p>
                </div>
              </div>
              <div className="places-left-img mt-30 min-1400:mt-60 w-full 768:max-990:w-[calc(50%_-_15px)] min-990:w-[50%] min-1400:w-[380px] min-1600:w-[441px] min-990:ml-auto max-990:h-auto max-990:aspect-[1.05/1]">
                <Image
                  src={img1.src}
                  alt={img1.alt}
                  width={441}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="places-right min-990:flex-[0_0_calc(52%_-_15px)] min-1400:flex-[0_0_calc(52%_-_30px)]">
              <div className="places-right-img min-990:h-full">
                <Image
                  src={img2.src}
                  alt={img2.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto min-990:h-full object-cover max-990:aspect-[1.05/1] 768:max-990:absolute 768:max-990:w-[calc(50%_-_15px)] 768:max-990:bottom-30 768:max-990:right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Places;
