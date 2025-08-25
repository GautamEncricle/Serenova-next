import { StaticImageData } from "next/image";

export interface WeDoImage {
  src: string | StaticImageData;
  alt: string;
}

export interface WeDoButton {
  text: string;
  link: string;
}

export interface WeDoPoint {
  li: string;
}

export interface WeDoData {
  img1: WeDoImage;
  img2: WeDoImage;
  imgWheel: WeDoImage & { link: string };
  subtitle: string;
  title: string;
  text: string;
  btn: WeDoButton;
  points: WeDoPoint[];
}

export interface TravelerIcon {
  src: string | StaticImageData;
  alt: string;
}

export interface TravelerItem {
  link: string;
  icon: TravelerIcon;
  title: string;
  tag: string;
  text: string;
}

export interface TravelerData {
  subtitle: string;
  title: string;
  note: string;
  travels: TravelerItem[];
}

export interface PlacesButton {
  text: string;
  link: string;
}

export interface PlacesImage {
  src: string | StaticImageData;
  alt: string;
}

export interface PlacesData {
  subtitle: string;
  title: string;
  btn: PlacesButton;
  text: string;
  img1: PlacesImage;
  img2: PlacesImage;
}

export interface VacationImage {
  src: string | StaticImageData;
  alt: string;
}

export interface VacationPoint {
  number: number; // Changed from string to number
  label: string;
}

export interface VacationData {
  img: VacationImage;
  subtitle: string;
  title: string;
  text: string;
  arrowLink: string;
  points: VacationPoint[];
}

export interface AboutData {
  aboutDo: WeDoData;
  aboutTraveler: TravelerData;
  aboutPlaces: PlacesData;
  aboutVacation: VacationData;
  testimonials: {
    subtitle: string;
    title: string;
    testimonials: Array<{
      id: number;
      text: string;
      customer: string;
    }>;
  };
  journal: {
    subtitle: string;
    title: string;
    journals: Array<{
      id: number;
      link: string;
      img: {
        src: string | StaticImageData;
        alt: string;
      };
      subtitle: string;
      title: string;
      points: Array<{
        text: string;
      }>;
    }>;
    btn: {
      btnText: string;
      link: string;
    };
  };
}
