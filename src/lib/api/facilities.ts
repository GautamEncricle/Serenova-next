import axiosClient from "@/lib/axiosClient";

export async function fetchFacilitiesData() {
  try {
    const [
      facilitiesAboutRes,
      facilitiesToursRes,
      lifestyleRes,
      facilitiesExploreRes,
      testimonialRes,
      journalRes,
    ] = await Promise.all([
      axiosClient.get("/facilitiesAbout"),
      axiosClient.get("/facilitiesTours"),
      axiosClient.get("/lifestyle"),
      axiosClient.get("/facilitiesExplore"),
      axiosClient.get("/testimonials"),
      axiosClient.get("/journal"),
    ]);

    return {
      aboutData: facilitiesAboutRes.data,
      tourData: facilitiesToursRes.data,
      lifestyleData: lifestyleRes.data,
      exploreData: facilitiesExploreRes.data,
      testimonialData: testimonialRes.data,
      journalData: journalRes.data,
    };
  } catch (error) {
    console.error("Error fetching facilities data:", error);
    return {
      aboutData: null,
      tourData: null,
      lifestyleData: null,
      exploreData: null,
      testimonialData: null,
      journalData: null,
    };
  }
}
