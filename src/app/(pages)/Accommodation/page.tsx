import InsideBanner from "@/components/insideBanner/insideBanner";
import About from "@/components/About/About";
import FilterListing from "@/components/FilterListing/FilterListing";
import Lifestyle from "@/components/Lifestyle/Lifestyle";
import Explore from "@/components/Explore/Explore";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";
import { getAccommodationData } from "@/lib/api/accommodation";

const Accommodation = async () => {
  const {
    aboutData,
    filterData,
    lifestyleData,
    exploreData,
    testimonialData,
    journalData,
  } = await getAccommodationData();

  return (
    <>
      <InsideBanner
        bg="/assets/images/accommodation-banner-bg.webp"
        title="Accommodation"
      />

      {aboutData && (
        <About
          data={aboutData}
          leafPosition="below"
          showButton={false}
          containerSize="small"
          suntitletreeleft={"after:!left-[56px]"}
        />
      )}

      {filterData && filterData.length > 0 && (
        <FilterListing
          data={filterData}
          showFilters={true}
          cardListMaxWidth={"1052px"}
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
};

Accommodation.layout = {
  headerType: "inside",
};

export default Accommodation;
