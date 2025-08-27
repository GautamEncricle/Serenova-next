"use client";

import React from "react";
const leaf = "/assets/images/explore-leaf.png";
import ExploreCard from "../exploreCard/Explore";

const Explore = ({ data }: { data: any }) => {
  const { title, cards } = data;

  return (
    <section className="explore-main relative py-60 min-1400:pb-0 min-1400:pt-[147px]">
      <div className="explore-leaf absolute bottom-10 left-0 max-990:hidden">
        <img
          src={leaf}
          alt="leaf"
          width={324}
          height={254}
          className="w-[200px] min-1200:w-auto"
        />
      </div>
      <div className="container-1538">
        <div className="explore-section relative z-1">
          <div className="explore-start flex flex-col min-990:flex-row gap-30 min-1400:gap-x-[44px]">
            <div className="explore-left min-990:flex-[0_0_calc(100%_-_680px)] min-1200:flex-[0_0_calc(100%_-_830px)] min-1400:flex-[0_0_calc(100%_-_977px)]">
              <div className="title max-990:text-center">
                <h2 className="h4">{title}</h2>
              </div>
            </div>
            <div className="explore-right min-990:flex-[0_0_650px] min-1200:flex-[0_0_800px] min-1400:flex-[0_0_933px]">
              <div className="explore-card-list flex flex-col min-640:flex-row gap-y-20 gap-x-30 min-1400:gap-x-[48px]">
                {cards.map((card: any) => (
                  <ExploreCard key={card.id} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
