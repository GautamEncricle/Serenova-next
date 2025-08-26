import React, { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/types/galleryTypes";

interface GalleryFilterProps {
  data: GalleryImage[];
}

const GalleryFilter: React.FC<GalleryFilterProps> = ({ data }) => {
  const [activeTag, setActiveTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const uniqueTags = [...new Set(data.flatMap((item) => item.tags))];
  const filterTags = ["All", ...uniqueTags];

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    setVisibleCount(12);
  };

  const filteredImages =
    activeTag === "All"
      ? data
      : data.filter((item) => item.tags.includes(activeTag));

  const imagesToShow = filteredImages.slice(0, visibleCount);

  return (
    <section className="gallery-main py-60 min-1400:pt-[87px] min-1400:pb-[147px]">
      <div className="container-1648">
        <div className="gallery-section">
          <div className="flex flex-wrap justify-center gap-x-22 gap-y-16 mb-40 min-1400:mb-[67px]">
            {filterTags.map((tag) => {
              const isActive = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`btn cursor-pointer normal-case font-normal ${
                    isActive
                      ? "btn-gold hover:bg-secondary-800 hover:text-white"
                      : "btn-gold-simple text-black hover:bg-transparent hover:text-black"
                  }`}>
                  {tag}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 min-576:grid-cols-2 min-990:grid-cols-3 gap-30 min-1400:gap-42">
            {imagesToShow.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500} // Set appropriate width
                  height={500} // Set appropriate height
                  className="w-full h-auto aspect-[1.16/1] object-cover"
                />
              </div>
            ))}
          </div>

          {visibleCount < filteredImages.length && (
            <div className="mt-40 min-1400:mt-[67px]">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="btn btn-gold-simple mx-auto cursor-pointer normal-case">
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryFilter;
