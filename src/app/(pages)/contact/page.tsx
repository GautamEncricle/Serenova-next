"use client";

import React, { useEffect, useState } from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import ContactForm from "@/components/ContactForm/ContactForm";
import Count from "@/components/Count/Count";
import axiosClient from "@/lib/axiosClient";
import { ContactFormData, CountData } from "@/types/contactTypes";
const bannerBG = "/assets/images/contact-banner-bg.webp";

const Contact = () => {
  const [contactFormData, setContactFormData] =
    useState<ContactFormData | null>(null);
  const [countData, setCountData] = useState<CountData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoading(true);
        const [contactFormRes, countRes] = await Promise.all([
          axiosClient.get("/contactContactform"),
          axiosClient.get("/contactCount"),
        ]);
        setContactFormData(contactFormRes.data);
        setCountData(countRes.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <InsideBanner bg={bannerBG} title="Contact Us" />
      {contactFormData && <ContactForm data={contactFormData} />}
      {countData && <Count data={countData} />}
    </>
  );
};

Contact.layout = {
  headerType: "inside",
};

export default Contact;
