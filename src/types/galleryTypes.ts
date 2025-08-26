export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  tags: string[];
  title?: string;
  description?: string;
}

export interface GalleryData {
  images: GalleryImage[];
  categories?: string[];
  title?: string;
  subtitle?: string;
}
