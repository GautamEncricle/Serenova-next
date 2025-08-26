"use client";

import { GalleryImage } from "@/types/galleryTypes";

import React, { useEffect, useState } from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import GalleryFilter from "@/components/Gallery/Gallery";
import axiosClient from "@/lib/axiosClient";
const bannerBG = "/assets/images/gallery-banner-bg.webp";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState<GalleryImage[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const galleryRes = await axiosClient.get("/galleryGallery");
        setGalleryData(galleryRes.data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <InsideBanner bg={bannerBG} title="Gallery" />
      {galleryData && <GalleryFilter data={galleryData} />}
    </>
  );
};

Gallery.layout = {
  headerType: "inside",
};

export default Gallery;
