import axiosClient from "@/lib/axiosClient";

export async function getEventsData() {
  try {
    const [
      eventsAboutRes,
      eventsFilterRes,
      lifestyleRes,
      eventsExploreRes,
      testimonialRes,
      journalRes,
    ] = await Promise.all([
      axiosClient.get("/eventsAbout"),
      axiosClient.get("/eventsFilter"),
      axiosClient.get("/lifestyle"),
      axiosClient.get("/eventsExplore"),
      axiosClient.get("/testimonials"),
      axiosClient.get("/journal"),
    ]);

    return {
      aboutData: eventsAboutRes.data,
      filterData: eventsFilterRes.data,
      lifestyleData: lifestyleRes.data,
      exploreData: eventsExploreRes.data,
      testimonialData: testimonialRes.data,
      journalData: journalRes.data,
    };
  } catch (error) {
    console.error("Error fetching events data:", error);
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
