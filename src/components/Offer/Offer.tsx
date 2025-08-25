import React from "react";
const leaf = "/assets/images/offer-leaf.png";
const bench = "/assets/images/offer-bench.png";

const Offer = ({ data }: { data: any }) => {
  const { subtitle, text, btn, image1, image2 } = data;

  return (
    <section className="offer-main relative overflow-hidden py-60 min-990:pt-60 min-990:pb-120 min-1400:pt-[148px] min-1400:pb-[180px]">
      <div className="offer-leaf absolute top-[-15px] right-0">
        <img
          src={leaf}
          alt="leaf"
          width={230}
          height={269}
          className="w-[100px] min-990:w-[150px] min-1400:w-auto"
        />
      </div>
      <div className="offer-bench absolute bottom-0 min-1400:bottom-28 left-0">
        <img
          src={bench}
          alt="bench"
          width={273}
          height={213}
          className="w-[150px] min-1400:w-auto"
        />
      </div>
      <div className="container-1610">
        <div className="offer-section relative z-1">
          <div className="offer-inside flex flex-col min-990:flex-row gap-22">
            <div className="offer-left min-990:flex-[0_0_calc(54%_-_11px)]">
              <div className="sub-title mb-17">
                <span>{subtitle}</span>
              </div>
              <div className="offer-title h3-title">
                <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
              </div>
              <div className="offer-text mt-25 max-w-[751px]">
                <p>{text}</p>
              </div>
              <div className="offer-btn mt-25 min-1400:mt-42">
                <a href={btn.link} className="btn btn-gold-simple">
                  {btn.btnText}
                </a>
              </div>
            </div>
            <div className="offer-right min-990:flex-[0_0_calc(46%_-_11px)] pt-40 min-990:pt-[57px]">
              <div className="offer-images">
                <div className="offer-image w-[57%] relative after:content-[''] after:absolute after:w-full after:h-full after:top-[-13px] after:right-[-13px] after:border-[2px] after:border-solid after:border-secondary-800 after:pointer-events-none">
                  <img
                    src={image1.src}
                    alt={image1.alt}
                    width="auto"
                    height="auto"
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
                <div className="offer-image w-[57%] ml-auto mt-[-30%]">
                  <img
                    src={image2.src}
                    alt={image2.alt}
                    width="auto"
                    height="auto"
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
