import React from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import About from "@/components/About/About";
import Tours from "@/components/Tours/Tours";
import Lifestyle from "@/components/Lifestyle/Lifestyle";
import Explore from "@/components/Explore/Explore";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";
import { fetchFacilitiesData } from "@/lib/api/facilities";

const bannerBG = "/assets/images/facilities-banner-bg.webp";

const Facilities = async () => {
  const {
    aboutData,
    tourData,
    lifestyleData,
    exploreData,
    testimonialData,
    journalData,
  } = await fetchFacilitiesData();

  return (
    <>
      <InsideBanner bg={bannerBG} title="Facilities" />
      {aboutData && (
        <About
          data={aboutData}
          leafPosition="hidden"
          showButton={false}
          containerSize="small"
          suntitletreeleft={"after:!left-[82px]"}
        />
      )}
      {tourData && <Tours data={tourData} />}
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

Facilities.layout = {
  headerType: "inside",
};

export default Facilities;
