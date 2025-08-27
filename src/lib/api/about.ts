import axiosClient from "@/lib/axiosClient";
import {
  WeDoData,
  TravelerData,
  PlacesData,
  VacationData,
} from "@/types/aboutTypes";
import { Testimonials, Journal as JournalType } from "@/types/homeTypes";

export async function getAboutPageData() {
  try {
    const [
      aboutDoRes,
      aboutTravelerRes,
      aboutPlacesRes,
      aboutVacationRes,
      testimonialsRes,
      journalRes,
    ] = await Promise.all([
      axiosClient.get<WeDoData>("/aboutDo"),
      axiosClient.get<TravelerData>("/aboutTraveler"),
      axiosClient.get<PlacesData>("/aboutPlaces"),
      axiosClient.get<VacationData>("/aboutVacation"),
      axiosClient.get<Testimonials>("/testimonials"),
      axiosClient.get<JournalType>("/journal"),
    ]);

    return {
      aboutDo: aboutDoRes.data,
      aboutTraveler: aboutTravelerRes.data,
      aboutPlaces: aboutPlacesRes.data,
      aboutVacation: aboutVacationRes.data,
      testimonials: testimonialsRes.data,
      journal: journalRes.data,
    };
  } catch (err) {
    console.error("Error fetching About page data:", err);
    return {
      aboutDo: null,
      aboutTraveler: null,
      aboutPlaces: null,
      aboutVacation: null,
      testimonials: null,
      journal: null,
    };
  }
}
