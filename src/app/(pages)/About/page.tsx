"use client";

import React, { useEffect, useState } from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import WeDo from "@/components/WeDo/WeDo";
import Traveler from "@/components/Travelers/Travelers";
import Places from "@/components/Places/Places";
import Vacation from "@/components/Vacation/Vacation";
import Testimonial from "@/components/Testimonial/Testimonial";
import Journal from "@/components/Journal/Journal";
import axiosClient from "@/lib/axiosClient";
import {
  WeDoData,
  TravelerData,
  PlacesData,
  VacationData,
} from "@/types/aboutTypes";
import { Testimonials, Journal as JournalType } from "@/types/homeTypes";

const bannerBG = "/assets/images/about-us-bg.webp";

const About = () => {
  const [aboutDo, setAboutDo] = useState<WeDoData | null>(null);
  const [aboutTraveler, setAboutTraveler] = useState<TravelerData | null>(null);
  const [aboutPlaces, setAboutPlaces] = useState<PlacesData | null>(null);
  const [aboutVacation, setAboutVacation] = useState<VacationData | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonials | null>(null);
  const [journal, setJournal] = useState<JournalType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        const [
          aboutDoRes,
          aboutTravelerRes,
          aboutPlacesRes,
          aboutVacationRes,
          testimonialsRes,
          journalRes,
        ] = await Promise.all([
          axiosClient.get<WeDoData>("/aboutDo"),
          axiosClient.get<TravelerData>("/aboutTraveler"),
          axiosClient.get<PlacesData>("/aboutPlaces"),
          axiosClient.get<VacationData>("/aboutVacation"),
          axiosClient.get<Testimonials>("/testimonials"),
          axiosClient.get<JournalType>("/journal"),
        ]);

        setAboutDo(aboutDoRes.data);
        setAboutTraveler(aboutTravelerRes.data);
        setAboutPlaces(aboutPlacesRes.data);
        setAboutVacation(aboutVacationRes.data);
        console.log("Testimonials data:", testimonialsRes.data);
        console.log(
          "Testimonials structure:",
          testimonialsRes.data.testimonials
        );
        setTestimonials(testimonialsRes.data);
        setJournal(journalRes.data);
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
};

About.layout = {
  headerType: "inside",
};

export default About;
