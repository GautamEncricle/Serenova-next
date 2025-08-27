import React from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import GalleryFilter from "@/components/Gallery/Gallery";
import { fetchGalleryData } from "@/lib/api/gallery";

const bannerBG = "/assets/images/gallery-banner-bg.webp";

const Gallery = async () => {
  const galleryData = await fetchGalleryData();

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
