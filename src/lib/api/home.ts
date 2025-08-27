import axiosClient from "@/lib/axiosClient";

export async function fetchHomeData() {
  try {
    const [
      bannerRes,
      servicesRes,
      aboutRes,
      bestRes,
      companiesRes,
      toursRes,
      offerRes,
      lifestyleRes,
      testimonialsRes,
      journalRes,
    ] = await Promise.all([
      axiosClient.get("/banner"),
      axiosClient.get("/services"),
      axiosClient.get("/about"),
      axiosClient.get("/best"),
      axiosClient.get("/companies"),
      axiosClient.get("/tours"),
      axiosClient.get("/offer"),
      axiosClient.get("/lifestyle"),
      axiosClient.get("/testimonials"),
      axiosClient.get("/journal"),
    ]);

    return {
      banner: bannerRes.data,
      services: servicesRes.data,
      about: aboutRes.data,
      best: bestRes.data,
      companies: companiesRes.data,
      tours: toursRes.data,
      offer: offerRes.data,
      lifestyle: lifestyleRes.data,
      testimonials: testimonialsRes.data,
      journal: journalRes.data,
    };
  } catch (err) {
    console.error("Error fetching home data:", err);
    return {
      banner: null,
      services: null,
      about: null,
      best: null,
      companies: null,
      tours: null,
      offer: null,
      lifestyle: null,
      testimonials: null,
      journal: null,
    };
  }
}
