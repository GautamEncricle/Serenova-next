import React from "react";
import InsideBanner from "@/components/insideBanner/insideBanner";
import Error from "@/components/404/404";

const NotFound = () => {
  return (
    <>
      <InsideBanner bg="/assets/images/contact-banner-bg.webp" title="404" />
      <Error />
    </>
  );
};

NotFound.layout = {
  headerType: "inside",
};

export default NotFound;
