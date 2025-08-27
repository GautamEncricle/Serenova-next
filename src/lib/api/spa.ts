import axiosClient from "@/lib/axiosClient";
import {
  SpaAbout,
  SpaTraveler,
  SpaRitual,
  SpaIndulge,
  SpaExplore,
} from "@/types/spaTypes";
import { Testimonials, Journals } from "@/types/homeTypes";

export async function fetchSpaData() {
  try {
    const [
      spaAboutRes,
      spaTravelerRes,
      spaRitualsRes,
      spaIndulgeRes,
      lifestyleRes,
      spaExploreRes,
      testimonialRes,
      journalRes,
    ] = await Promise.all([
      axiosClient.get<SpaAbout>("/spaAbout"),
      axiosClient.get<SpaTraveler>("/spaTraveler"),
      axiosClient.get<SpaRitual>("/spaRituals"),
      axiosClient.get<SpaIndulge>("/spaIndulge"),
      axiosClient.get("/lifestyle"),
      axiosClient.get<SpaExplore>("/spaExplore"),
      axiosClient.get<Testimonials>("/testimonials"),
      axiosClient.get<Journals>("/journal"),
    ]);

    return {
      aboutData: spaAboutRes.data,
      travelerData: spaTravelerRes.data,
      ritualData: spaRitualsRes.data,
      indulgeData: spaIndulgeRes.data,
      lifestyleData: lifestyleRes.data,
      exploreData: spaExploreRes.data,
      testimonialData: testimonialRes.data,
      journalData: journalRes.data,
    };
  } catch (error) {
    console.error("Error fetching spa data:", error);
    return {
      aboutData: null,
      travelerData: null,
      ritualData: null,
      indulgeData: null,
      lifestyleData: null,
      exploreData: null,
      testimonialData: null,
      journalData: null,
    };
  }
}
