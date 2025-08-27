import InsideBanner from "@/components/insideBanner/insideBanner";
import About from "@/components/About/About";
import FilterListing from "@/components/FilterListing/FilterListing";
import Lifestyle from "@/components/Lifestyle/Lifestyle";
import Explore from "@/components/Explore/Explore";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";
import { getEventsData } from "@/lib/api/events";

const bannerBG = "/assets/images/events-banner-bg.webp";

export default async function Events() {
  const {
    aboutData,
    filterData,
    lifestyleData,
    exploreData,
    testimonialData,
    journalData,
  } = await getEventsData();

  return (
    <>
      <InsideBanner bg={bannerBG} title="Events" />
      {aboutData && (
        <About
          data={aboutData}
          leafPosition="below"
          showButton={false}
          containerSize="small"
          suntitletreeleft={"after:!left-[55px]"}
        />
      )}
      {filterData && (
        <FilterListing
          data={filterData}
          showFilters={false}
          cardListMaxWidth={"1177px"}
        />
      )}
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
}

Events.layout = {
  headerType: "inside",
};
