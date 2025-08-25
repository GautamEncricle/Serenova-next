import { StaticImageData } from "next/image";

export interface Banner {
  bannerImg: { img: string | StaticImageData }[];
  bannerTitle: string;
  gatewayText: string;
}

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  altImage: string;
}

export interface Services {
  subtitle: string;
  title: string;
  cards: ServiceCard[];
  btnText: string;
}

export interface About {
  subtitle: string;
  title: string;
  text: string;
  btnText: string;
  btnURL: string;
}

export interface BestMedia {
  type: "image" | "video";
  src: string | StaticImageData;
  alt: string;
}

export interface Best {
  img: BestMedia[];
  subtitle: string;
  title: string;
  text: string;
  list: { li: string }[];
  bestBtn: { btnText: string; link: string };
}

export interface Company {
  src: string;
  alt: string;
  link: string;
}

export interface Companies {
  companies: Company[];
}

export interface TourPoint {
  label: string;
  value: string;
}

export interface Tour {
  id: number;
  link: string;
  img: { src: string | StaticImageData; alt: string };
  title: string;
  subtitle: string;
  points: TourPoint[];
}

export interface Tours {
  subtitle: string;
  title: string;
  tours: Tour[];
  btn: { btnText: string; link: string };
}

export interface Offer {
  subtitle: string;
  title: string;
  text: string;
  btn: { btnText: string; link: string };
  image1: { src: string | StaticImageData; alt: string };
  image2: { src: string | StaticImageData; alt: string };
}

export interface Lifestyle {
  bg: { src: string | StaticImageData; alt: string };
  subtitle: string;
  title: string;
  text: string;
  btn1: { text: string; link: string };
  btn2: { text: string; link: string };
}

export interface Testimonial {
  id: number;
  text: string;
  customer: string;
}

export interface Testimonials {
  subtitle: string;
  title: string;
  testimonials: Testimonial[];
}

export interface JournalPoint {
  text: string;
}

export interface Journal {
  id: number;
  link: string;
  img: { src: string | StaticImageData; alt: string };
  subtitle: string;
  title: string;
  points: JournalPoint[];
}

export interface Journals {
  subtitle: string;
  title: string;
  journals: Journal[];
  btn: { btnText: string; link: string };
}

export interface HomeData {
  banner: Banner;
  services: Services;
  about: About;
  best: Best;
  companies: Companies;
  tours: Tours;
  offer: Offer;
  lifestyle: Lifestyle;
  testimonials: Testimonials;
  journal: Journals;
}
