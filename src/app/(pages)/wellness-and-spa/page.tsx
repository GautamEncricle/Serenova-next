import InsideBanner from "@/components/insideBanner/insideBanner";
import About from "@/components/About/About";
import Traveler from "@/components/Travelers/Travelers";
import Rituals from "@/components/Rituals/Rituals";
import Indulge from "@/components/Indulge/Indulge";
import Lifestyle from "@/components/Lifestyle/Lifestyle";
import Explore from "@/components/Explore/Explore";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";
import { fetchSpaData } from "@/lib/api/spa";

const bannerBG = "/assets/images/spa-banner-bg.webp";

export default async function Spa() {
  const {
    aboutData,
    travelerData,
    ritualData,
    indulgeData,
    lifestyleData,
    exploreData,
    testimonialData,
    journalData,
  } = await fetchSpaData();

  return (
    <>
      <InsideBanner bg={bannerBG} title="Wellness & Spa" />

      {aboutData && (
        <About
          data={{ ...aboutData, btnText: "READ MORE", btnURL: "/about" }}
          leafPosition="below"
          showButton={false}
          containerSize="small"
          suntitletreeleft="after:!left-[56px]"
        />
      )}

      {travelerData && (
        <Traveler
          data={{ ...travelerData, note: "" }}
          showReadMore={false}
          titleWidth="582px"
        />
      )}

      {ritualData && <Rituals data={ritualData} />}
      {indulgeData && <Indulge data={indulgeData} />}
      {lifestyleData && <Lifestyle data={lifestyleData} />}
      {exploreData && <Explore data={exploreData} />}
      {testimonialData && (
        <Testimonial data={testimonialData} leafDisplay="hidden" />
      )}
      {journalData && (
        <Journal data={journalData} bgColor="bg-dark-cream" treeDisplay="hidden" />
      )}
    </>
  );
}

Spa.layout = {
  headerType: "inside",
};
