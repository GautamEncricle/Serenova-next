"use client";

import React, { useEffect, useState } from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import About from "@/components/About/About";
import Traveler from "@/components/Travelers/Travelers";
import Rituals from "@/components/Rituals/Rituals";
import Indulge from "@/components/Indulge/Indulge";
import Lifestyle from "@/components/Lifestyle/Lifestyle";
import Explore from "@/components/Explore/Explore";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";
import axiosClient from "@/lib/axiosClient";
const bannerBG = "/assets/images/spa-banner-bg.webp";
import {
  SpaAbout,
  SpaTraveler,
  SpaRitual,
  SpaIndulge,
  SpaExplore,
  Testimonial as TestimonialType,
  Journal as JournalType,
} from "@/types/spaTypes";
import { Testimonials, Journals } from "@/types/homeTypes";

const Spa = () => {
  const [aboutData, setAboutData] = useState<SpaAbout | null>(null);
  const [travelerData, setTravelerData] = useState<SpaTraveler | null>(null);
  const [ritualData, setRitualData] = useState<SpaRitual | null>(null);
  const [indulgeData, setIndulgeData] = useState<SpaIndulge | null>(null);
  const [lifestyleData, setLifestyleData] = useState<any | null>(null);
  const [exploreData, setExploreData] = useState<SpaExplore | null>(null);
  const [testimonialData, setTestimonialData] = useState<Testimonials | null>(
    null
  );
  const [journalData, setJournalData] = useState<Journals | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpaData = async () => {
      try {
        setLoading(true);

        const [
          spaAboutRes,
          spaTravelerRes,
          spaRitualsRes,
          spaIndulgeRes,
          lifestyleRes,
          spaExploreRes,
          testimonialRes,
          journalRes,
        ] = await Promise.all([
          axiosClient.get("/spaAbout"),
          axiosClient.get("/spaTraveler"),
          axiosClient.get("/spaRituals"),
          axiosClient.get("/spaIndulge"),
          axiosClient.get("/lifestyle"),
          axiosClient.get("/spaExplore"),
          axiosClient.get("/testimonials"),
          axiosClient.get("/journal"),
        ]);

        setAboutData(spaAboutRes.data);
        setTravelerData(spaTravelerRes.data);
        setRitualData(spaRitualsRes.data);
        setIndulgeData(spaIndulgeRes.data);
        setLifestyleData(lifestyleRes.data);
        setExploreData(spaExploreRes.data);
        setTestimonialData(testimonialRes.data);
        setJournalData(journalRes.data);
      } catch (error) {
        console.error("Error fetching spa data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <InsideBanner bg={bannerBG} title="Wellness & Spa" />
      {aboutData && (
        <About
          data={{ ...aboutData, btnText: "READ MORE", btnURL: "/about" }}
          leafPosition="below"
          showButton={false}
          containerSize="small"
          suntitletreeleft={"after:!left-[56px]"}
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

Spa.layout = {
  headerType: "inside",
};

export default Spa;
