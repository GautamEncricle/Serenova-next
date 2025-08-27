import InsideBanner from "@/components/insideBanner/insideBanner";
import WeDo from "@/components/WeDo/WeDo";
import Traveler from "@/components/Travelers/Travelers";
import Places from "@/components/Places/Places";
import Vacation from "@/components/Vacation/Vacation";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";

import { getAboutPageData } from "@/lib/api/about";

const bannerBG = "/assets/images/about-us-bg.webp";

export default async function About() {
  const {
    aboutDo,
    aboutTraveler,
    aboutPlaces,
    aboutVacation,
    testimonials,
    journal,
  } = await getAboutPageData();

  return (
    <>
      <InsideBanner bg={bannerBG} title="About Us" />
      {aboutDo && <WeDo data={aboutDo} />}
      {aboutTraveler && <Traveler data={aboutTraveler} titleWidth="676px" />}
      {aboutPlaces && <Places data={aboutPlaces} />}
      {aboutVacation && <Vacation data={aboutVacation} />}
      {testimonials && <Testimonial data={testimonials} />}
      {journal && (
        <Journal
          data={journal}
          bgColor={"bg-dark-cream"}
          treeDisplay={"hidden"}
        />
      )}
    </>
  );
}

About.layout = {
  headerType: "inside",
};
