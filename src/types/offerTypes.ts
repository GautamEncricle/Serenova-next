import { StaticImageData } from "next/image";

export interface Package {
  id: number;
  link: string;
  name: string;
  price: string;
  time: string;
  advantages: { li: string }[];
}

export interface PackagesData {
  subtitle: string;
  title: string;
  text: string;
  packs: Package[];
}

export interface OfferFilterData {
  link: string;
  img: string | StaticImageData;
  title: string;
  tags: string[];
  description: string;
}

export interface OfferAboutData {
  subtitle: string;
  title: string;
  text: string;
}

export interface OfferExploreCard {
  link: string;
  img: { src: string | StaticImageData; alt: string };
  title: string;
  text: string;
}

export interface OfferExploreData {
  title: string;
  cards: OfferExploreCard[];
}
