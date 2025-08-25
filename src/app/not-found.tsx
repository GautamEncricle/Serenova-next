import React from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import Error from "@/components/404/404";
import bannerBG from "../../public/assets/images/contact-banner-bg.webp";

const NotFound = () => {
  return (
    <>
      <InsideBanner bg={bannerBG} title="404" />
      <Error />
    </>
  );
};

NotFound.layout = {
  headerType: "inside",
};

export default NotFound;
