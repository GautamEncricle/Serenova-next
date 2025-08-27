import React from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import About from "@/components/About/About";
import FilterListing from "@/components/FilterListing/FilterListing";
import Packages from "@/components/Packages/Packages";
import Lifestyle from "@/components/Lifestyle/Lifestyle";
import Explore from "@/components/Explore/Explore";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";

import { fetchOfferData } from "@/lib/api/offer";

const Offer = async () => {
  const {
    aboutData,
    filterData,
    packagesData,
    lifestyleData,
    exploreData,
    testimonialData,
    journalData,
  } = await fetchOfferData();

  return (
    <>
      <InsideBanner
        bg="/assets/images/offer-banner-bg.webp"
        title="Offer & Packages"
      />

      {aboutData && (
        <About
          data={aboutData}
          leafPosition="below"
          showButton={false}
          containerSize="small"
          suntitletreeleft={"after:!left-[50px]"}
        />
      )}

      {filterData.length > 0 && (
        <FilterListing
          data={filterData}
          showFilters={false}
          cardListMaxWidth={"1052px"}
        />
      )}

      {packagesData && <Packages data={packagesData} />}
      {lifestyleData && <Lifestyle data={lifestyleData} />}
      {exploreData && <Explore data={exploreData} />}
      {testimonialData && (
        <Testimonial data={testimonialData} leafDisplay={"hidden"} />
      )}
      {journalData && (
        <Journal
          data={journalData}
          bgColor={"bg-dark-cream"}
          treeDisplay={"hidden"}
        />
      )}
    </>
  );
};

Offer.layout = {
  headerType: "inside",
};

export default Offer;
