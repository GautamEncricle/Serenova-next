"use client";

import React, { useEffect, useState } from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import About from "@/components/About/About";
import FilterListing from "@/components/FilterListing/FilterListing";
import Packages from "@/components/Packages/Packages";
import Lifestyle from "@/components/Lifestyle/Lifestyle";
import Explore from "@/components/Explore/Explore";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";
import axiosClient from "@/lib/axiosClient";
import { FilterData } from "@/types/accommodationTypes";
import { About as AboutType, Testimonials, Journals } from "@/types/homeTypes";
import {
  PackagesData,
  OfferFilterData,
  OfferAboutData,
  OfferExploreData,
} from "@/types/offerTypes";

const Offer = () => {
  const [aboutData, setAboutData] = useState<AboutType | null>(null);
  const [filterData, setFilterData] = useState<FilterData[]>([]);
  const [packagesData, setPackagesData] = useState<any | null>(null);
  const [lifestyleData, setLifestyleData] = useState<any | null>(null);
  const [exploreData, setExploreData] = useState<OfferExploreData | null>(null);
  const [testimonialData, setTestimonialData] = useState<Testimonials | null>(
    null
  );
  const [journalData, setJournalData] = useState<Journals | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        const [
          aboutRes,
          filterRes,
          packagesRes,
          lifestyleRes,
          exploreRes,
          testimonialsRes,
          journalRes,
        ] = await Promise.all([
          axiosClient.get<AboutType>("/offerAbout"),
          axiosClient.get<FilterData[]>("/offerFilter"),
          axiosClient.get("/offerPackages"),
          axiosClient.get("/lifestyle"),
          axiosClient.get<OfferExploreData>("/offerExplore"),
          axiosClient.get<Testimonials>("/testimonials"),
          axiosClient.get<Journals>("/journal"),
        ]);

        setAboutData(aboutRes.data);
        setFilterData(filterRes.data);
        setPackagesData(packagesRes.data);
        setLifestyleData(lifestyleRes.data);
        setExploreData(exploreRes.data);
        setTestimonialData(testimonialsRes.data);
        setJournalData(journalRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) return <div>Loading...</div>;

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
