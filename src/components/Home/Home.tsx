import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Best from "@/components/Best/Best";
import Companies from "@/components/Companies/Companies";
import Tours from "@/components/Tours/Tours";
import Offer from "@/components/Offer/Offer";
import Lifestyle from "@/components/Lifestyle/Lifestyle";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";
import { fetchHomeData } from "@/lib/api/home";

const HomePage = async () => {
  const {
    banner,
    services,
    about,
    best,
    companies,
    tours,
    offer,
    lifestyle,
    testimonials,
    journal,
  } = await fetchHomeData();

  return (
    <>
      {banner && <Banner data={banner} />}
      {services && <Services data={services} />}
      {about && (
        <About
          data={about}
          suntitletreeleft="after:!left-[19px]"
          bgColor="bg-dark-cream"
        />
      )}
      {best && <Best data={best} />}
      {companies && <Companies data={companies} />}
      {tours && <Tours data={tours} showTree={false} />}
      {offer && <Offer data={offer} />}
      {lifestyle && <Lifestyle data={lifestyle} />}
      {testimonials && <Testimonial data={testimonials} />}
      {journal && (
        <Journal data={journal} bgColor="bg-light" treeDisplay="block" />
      )}
    </>
  );
};

export default HomePage;
