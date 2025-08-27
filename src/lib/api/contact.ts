import axiosClient from "@/lib/axiosClient";
import { ContactFormData, CountData } from "@/types/contactTypes";

export async function getContactData() {
  try {
    const [contactFormRes, countRes] = await Promise.all([
      axiosClient.get<ContactFormData>("/contactContactform"),
      axiosClient.get<CountData>("/contactCount"),
    ]);

    return {
      contactFormData: contactFormRes.data,
      countData: countRes.data,
    };
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return {
      contactFormData: null,
      countData: null,
    };
  }
}
