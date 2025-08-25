"use client";

import React, { useEffect, useState } from "react";
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
import axiosClient from "@/lib/axiosClient";
import { HomeData } from "@/types/homeTypes";

const HomePage = () => {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get<HomeData>("/home");
        setHomeData(response.data);
      } catch (err) {
        setError("Failed to fetch home data");
        console.error("Error fetching home data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!homeData) {
    return <div>No data available</div>;
  }

  return (
    <>
      <Banner data={homeData.banner} />
      <Services data={homeData.services} />
      <About
        data={homeData.about}
        suntitletreeleft={"after:!left-[19px]"}
        bgColor={"bg-dark-cream"}
      />
      <Best data={homeData.best} />
      <Companies data={homeData.companies} />
      <Tours data={homeData.tours} showTree={false} />
      <Offer data={homeData.offer} />
      <Lifestyle data={homeData.lifestyle} />
      <Testimonial data={homeData.testimonials} />
      <Journal data={homeData.journal} bgColor="bg-light" treeDisplay="block" />
    </>
  );
};

export default HomePage;
