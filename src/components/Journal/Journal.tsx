import React from "react";
import Image from "next/image";
import JournalCard from "../journalCard/journalCard";

const leaf = "/assets/images/journal-leaf.png";
const tree = "/assets/images/journal-tree.png";

const Journal = ({
  data,
  bgColor,
  treeDisplay,
}: {
  data: any;
  bgColor: string;
  treeDisplay: string;
}) => {
  const { subtitle, title, journals, btn } = data;

  return (
    <section
      className={`journal-main ${bgColor} relative py-80 min-1400:pt-[147px] min-1400:pb-[204px]`}>
      <div className="journal-leaf absolute top-0 left-0">
        <Image
          src={leaf}
          alt="leaf"
          width={315}
          height={234}
          className="w-[120px] min-768:w-[200px] min-1400:w-auto"
        />
      </div>
      <div
        className={`journal-tree ${treeDisplay} absolute bottom-0 min-1400:bottom-52 right-0`}>
        <Image
          src={tree}
          alt="tree"
          width={229}
          height={263}
          className="w-[80px] min-576:w-[120px] min-1400:w-auto"
        />
      </div>
      <div className="container-1320">
        <div className="journal-section relative z-1">
          <div className="journal-start">
            <div className="sub-title sub-title-no-translate mb-17">
              <span className="mx-auto after:!left-30">{subtitle}</span>
            </div>
            <div className="title text-center">
              <h2 className="h4">{title}</h2>
            </div>
            <div className="journal-list grid grid-cols-1 min-576:grid-cols-2 min-990:grid-cols-3 min-1200:grid-cols-4 gap-x-32 gap-y-32 mt-40 min-1400:mt-[51px]">
              {journals.map((journal: any) => (
                <JournalCard key={journal.id} {...journal} />
              ))}
            </div>
            <div className="journal-btn mt-[43px]">
              <a href={btn.link} className="btn btn-gold-simple mx-auto">
                {btn.btnText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
