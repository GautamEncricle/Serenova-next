import React from "react";
import PackageCard from "../packageCard/packageCard";
import { PackagesData } from "@/types/offerTypes";
const leaf = "/assets/images/package-leaf.png";

interface PackagesProps {
  data: PackagesData;
}

const Packages: React.FC<PackagesProps> = ({ data }) => {
  const { subtitle, title, text, packs } = data;

  return (
    <section className="packages-main relative py-60 min-1400:pt-76 min-1400:pb-[147px]">
      <div className="package-leaf absolute top-0 left-0">
        <img
          src={leaf}
          alt="leaf"
          width={190}
          height={257}
          className="w-[80px] min-990:w-[120px] min-1400:w-auto"
        />
      </div>
      <div className="container-1395">
        <div className="packages-section relative z-1">
          <div className="packages-start">
            <div className="sub-title sub-title-no-translate mb-16">
              <span className="mx-auto after:!left-[1px]">{subtitle}</span>
            </div>
            <div className="title text-center">
              <h2 className="h4">{title}</h2>
            </div>
            <div className="text text-center mt-22 max-w-[724px] mx-auto">
              <p>{text}</p>
            </div>
            <div className="packages-list mt-40 min-1600:mt-90 grid grid-cols-1 min-768:grid-cols-2 min-1200:grid-cols-3 gap-[33px]">
              {packs.map((pack) => (
                <PackageCard key={pack.id} {...pack} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
