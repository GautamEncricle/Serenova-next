"use client";

import React, { useState, useEffect } from "react";
import FilterCard from "../filterCard/filterCard";
import { FilterData } from "@/types/accommodationTypes";

interface FilterListingProps {
  data: FilterData[];
  showFilters?: boolean;
  cardListMaxWidth?: string;
}

const FilterListing: React.FC<FilterListingProps> = ({
  data,
  showFilters = true,
  cardListMaxWidth,
}) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    "All",
    ...new Set(
      data.flatMap((item) =>
        Array.isArray(item.category) ? item.category : [item.category]
      )
    ),
  ];

  const filteredCards =
    activeFilter === "All"
      ? data
      : data.filter((item) =>
          (Array.isArray(item.category)
            ? item.category
            : [item.category]
          ).includes(activeFilter)
        );

  return (
    <section className="filter-list-main py-60 min-1400:pt-[83px] min-1400:pb-[147px]">
      <div
        className={`filter-list-container px-15 ${
          showFilters === true ? "min-1600:pl-[120px]" : "min-1600:pl-[260px]"
        } min-1600:max-w-[1472px]`}>
        <div className="filter-list-section">
          <div
            className={`filter-list-start flex flex-col min-990:flex-row gap-40 min-1600:gap-[102px] ${
              showFilters === true ? "" : "990:max-1600:justify-center"
            }`}>
            {showFilters && (
              <div className="filters min-990:flex-[0_0_182px] flex flex-col max-990:flex-row max-990:flex-wrap gap-x-20 gap-y-20 min-990:gap-y-32">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`${
                      cat === activeFilter
                        ? "active btn-gold hover:text-white hover:bg-secondary-800"
                        : "btn-gold-simple text-black hover:text-white"
                    } btn font-normal normal-case cursor-pointer min-w-[112px]`}
                    onClick={() => setActiveFilter(cat)}>
                    {cat}
                  </button>
                ))}
              </div>
            )}
            <div
              className={`card-list flex flex-col gap-x-30 gap-y-40 min-1600:gap-y-62`}
              style={{
                ...(windowWidth >= 990 && { maxWidth: cardListMaxWidth }),
              }}>
              {filteredCards.map((item, index) => (
                <FilterCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterListing;
