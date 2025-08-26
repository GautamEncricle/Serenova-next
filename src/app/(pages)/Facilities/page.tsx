"use client";

import React, { useEffect, useState } from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import About from "@/components/About/About";
import Tours from "@/components/Tours/Tours";
import Lifestyle from "@/components/Lifestyle/Lifestyle";
import Explore from "@/components/Explore/Explore";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";
import axiosClient from "@/lib/axiosClient";
const bannerBG = "/assets/images/facilities-banner-bg.webp";

const Facilities = () => {
  const [aboutData, setAboutData] = useState(null);
  const [tourData, setTourData] = useState(null);
  const [lifestyleData, setLifestyleData] = useState(null);
  const [exploreData, setExploreData] = useState(null);
  const [testimonialData, setTestimonialData] = useState(null);
  const [journalData, setJournalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFacilitiesData = async () => {
      try {
        setLoading(true);

        const [
          facilitiesAboutRes,
          facilitiesToursRes,
          lifestyleRes,
          facilitiesExploreRes,
          testimonialRes,
          journalRes,
        ] = await Promise.all([
          axiosClient.get("/facilitiesAbout"),
          axiosClient.get("/facilitiesTours"),
          axiosClient.get("/lifestyle"),
          axiosClient.get("/facilitiesExplore"),
          axiosClient.get("/testimonials"),
          axiosClient.get("/journal"),
        ]);

        setAboutData(facilitiesAboutRes.data);
        setTourData(facilitiesToursRes.data);
        setLifestyleData(lifestyleRes.data);
        setExploreData(facilitiesExploreRes.data);
        setTestimonialData(testimonialRes.data);
        setJournalData(journalRes.data);
      } catch (error) {
        console.error("Error fetching facilities data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFacilitiesData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
