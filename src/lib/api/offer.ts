import axiosClient from "@/lib/axiosClient";
import { FilterData } from "@/types/accommodationTypes";
import { About as AboutType, Testimonials, Journals } from "@/types/homeTypes";
import {
  PackagesData,
  OfferExploreData,
} from "@/types/offerTypes";

export interface OfferPageData {
  aboutData: AboutType | null;
  filterData: FilterData[];
  packagesData: PackagesData | null;
  lifestyleData: any | null;
  exploreData: OfferExploreData | null;
  testimonialData: Testimonials | null;
  journalData: Journals | null;
}

export async function fetchOfferData(): Promise<OfferPageData> {
  try {
    const [
      aboutRes,
      filterRes,
      packagesRes,
      lifestyleRes,
      exploreRes,
      testimonialsRes,
      journalRes,
    ] = await Promise.all([
      axiosClient.get<AboutType>("/offerAbout"),
      axiosClient.get<FilterData[]>("/offerFilter"),
      axiosClient.get("/offerPackages"),
      axiosClient.get("/lifestyle"),
      axiosClient.get<OfferExploreData>("/offerExplore"),
      axiosClient.get<Testimonials>("/testimonials"),
      axiosClient.get<Journals>("/journal"),
    ]);

    return {
      aboutData: aboutRes.data,
      filterData: filterRes.data,
      packagesData: packagesRes.data,
      lifestyleData: lifestyleRes.data,
      exploreData: exploreRes.data,
      testimonialData: testimonialsRes.data,
      journalData: journalRes.data,
    };
  } catch (err) {
    console.error("Error fetching offer page data:", err);
    return {
      aboutData: null,
      filterData: [],
      packagesData: null,
      lifestyleData: null,
      exploreData: null,
      testimonialData: null,
      journalData: null,
    };
  }
}
