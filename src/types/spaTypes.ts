export interface SpaAbout {
  subtitle: string;
  title: string;
  text: string;
}

export interface SpaTraveler {
  subtitle: string;
  title: string;
  travels: Array<{
    link: string;
    icon: {
      src: string;
      alt: string;
    };
    title: string;
    tag: string;
    text: string;
  }>;
}

export interface SpaRitual {
  subtitle: string;
  title: string;
  slides: Array<{
    id: number;
    img: string;
    title: string;
    text: string;
  }>;
}

export interface SpaIndulge {
  subtitle: string;
  title: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export interface SpaExplore {
  title: string;
  cards: Array<{
    link: string;
    img: {
      src: string;
      alt: string;
    };
    title: string;
    text: string;
  }>;
}

export interface Testimonial {
  id: number;
  text: string;
  customer: string;
}

export interface Journal {
  id: number;
  link: string;
  img: {
    src: string;
    alt: string;
  };
  subtitle: string;
  title: string;
  points: Array<{
    text: string;
  }>;
}
