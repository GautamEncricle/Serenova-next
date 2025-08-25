import React from "react";
import ServiceCard from "../serviceCard/serviceCard";
import { Services as ServicesType } from "../../types/homeTypes";

interface ServicesProps {
  data: ServicesType;
}

const Services = ({ data }: ServicesProps) => {
  const { subtitle, title, cards, btnText } = data;

  return (
    <section className="service-main pt-60 min-990:pt-[96px] pb-70 min-1400:pb-[147px]">
      <div className="container-1330">
        <div className="service-section">
          <div className="service-start">
            <div className="sub-title">
              <span className="mx-auto">{subtitle}</span>
            </div>
            <div className="title text-center max-768:mt-4">
              <h2 className="h4">{title}</h2>
            </div>
            <div className="service-car-list mt-40 min-990:mt-50 min-1400:mt-62 grid grid-cols-1 min-640:grid-cols-2 min-1200:grid-cols-3 gap-y-20 gap-x-20 min-1400:gap-x-50">
              {cards.map((card) => (
                <ServiceCard key={card.id} {...card} />
              ))}
            </div>
            <div className="service-btn mt-40 min-990:mt-[53px]">
              <a href="/" className="btn btn-gold-simple mx-auto">
                {btnText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
