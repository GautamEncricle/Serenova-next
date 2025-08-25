import { StaticImageData } from "next/image";

export interface FilterData {
  link: string;
  img: string | StaticImageData;
  title: string;
  tags: string[];
  description: string;
  category: string | string[];
}

export interface ExploreData {
  title: string;
  cards: {
    link: string;
    img: { src: string | StaticImageData; alt: string };
    title: string;
    text: string;
  }[];
}
