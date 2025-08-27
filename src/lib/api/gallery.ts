import axiosClient from "@/lib/axiosClient";
import { GalleryImage } from "@/types/galleryTypes";

export async function fetchGalleryData(): Promise<GalleryImage[] | null> {
  try {
    const galleryRes = await axiosClient.get("/galleryGallery");
    return galleryRes.data;
  } catch (error) {
    console.error("Error fetching gallery data:", error);
    return null;
  }
}
