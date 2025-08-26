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

const HomePage = () => {
  const [banner, setBanner] = useState(null);
  const [services, setServices] = useState(null);
  const [about, setAbout] = useState(null);
  const [best, setBest] = useState(null);
  const [companies, setCompanies] = useState(null);
  const [tours, setTours] = useState(null);
  const [offer, setOffer] = useState(null);
  const [lifestyle, setLifestyle] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const [journal, setJournal] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        const [
          bannerRes,
          servicesRes,
          aboutRes,
          bestRes,
          companiesRes,
          toursRes,
          offerRes,
          lifestyleRes,
          testimonialsRes,
          journalRes,
        ] = await Promise.all([
          axiosClient.get("/banner"),
          axiosClient.get("/services"),
          axiosClient.get("/about"),
          axiosClient.get("/best"),
          axiosClient.get("/companies"),
          axiosClient.get("/tours"),
          axiosClient.get("/offer"),
          axiosClient.get("/lifestyle"),
          axiosClient.get("/testimonials"),
          axiosClient.get("/journal"),
        ]);

        setBanner(bannerRes.data);
        setServices(servicesRes.data);
        setAbout(aboutRes.data);
        setBest(bestRes.data);
        setCompanies(companiesRes.data);
        setTours(toursRes.data);
        setOffer(offerRes.data);
        setLifestyle(lifestyleRes.data);
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
