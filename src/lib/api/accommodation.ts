import axiosClient from "@/lib/axiosClient";
import { FilterData, ExploreData } from "@/types/accommodationTypes";
import { About as AboutType, Testimonials, Journals } from "@/types/homeTypes";

export async function getAccommodationData() {
  try {
    const [
      aboutRes,
      filterRes,
      lifestyleRes,
      exploreRes,
      testimonialsRes,
      journalRes,
    ] = await Promise.all([
      axiosClient.get<AboutType>("/about"),
      axiosClient.get<FilterData[]>("/filterData"),
      axiosClient.get("/lifestyle"),
      axiosClient.get<ExploreData>("/exploreData"),
      axiosClient.get<Testimonials>("/testimonials"),
      axiosClient.get<Journals>("/journal"),
    ]);

    return {
      aboutData: aboutRes.data,
      filterData: filterRes.data,
      lifestyleData: lifestyleRes.data,
      exploreData: exploreRes.data,
      testimonialData: testimonialsRes.data,
      journalData: journalRes.data,
    };
  } catch (error) {
    console.error("Error fetching accommodation data:", error);
    return {
      aboutData: null,
      filterData: null,
      lifestyleData: null,
      exploreData: null,
      testimonialData: null,
      journalData: null,
    };
  }
}
