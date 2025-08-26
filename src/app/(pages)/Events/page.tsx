"use client";

import React, { useEffect, useState } from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import About from "@/components/About/About";
import FilterListing from "@/components/FilterListing/FilterListing";
import Lifestyle from "@/components/Lifestyle/Lifestyle";
import Explore from "@/components/Explore/Explore";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";
import axiosClient from "@/lib/axiosClient";
const bannerBG = "/assets/images/events-banner-bg.webp";

const Events = () => {
  const [aboutData, setAboutData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [lifestyleData, setLifestyleData] = useState(null);
  const [exploreData, setExploreData] = useState(null);
  const [testimonialData, setTestimonialData] = useState(null);
  const [journalData, setJournalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        setLoading(true);

        const [
          eventsAboutRes,
          eventsFilterRes,
          lifestyleRes,
          eventsExploreRes,
          testimonialRes,
          journalRes,
        ] = await Promise.all([
          axiosClient.get("/eventsAbout"),
          axiosClient.get("/eventsFilter"),
          axiosClient.get("/lifestyle"),
          axiosClient.get("/eventsExplore"),
          axiosClient.get("/testimonials"),
          axiosClient.get("/journal"),
        ]);

        setAboutData(eventsAboutRes.data);
        setFilterData(eventsFilterRes.data);
        setLifestyleData(lifestyleRes.data);
        setExploreData(eventsExploreRes.data);
        setTestimonialData(testimonialRes.data);
        setJournalData(journalRes.data);
      } catch (error) {
        console.error("Error fetching events data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
};

Events.layout = {
  headerType: "inside",
};

export default Events;
