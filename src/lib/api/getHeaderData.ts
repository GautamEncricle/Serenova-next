// lib/getHeaderData.ts
import axiosClient from "@/lib/axiosClient";
import { HeaderData } from "@/types/headerTypes";

export async function getHeaderData(): Promise<HeaderData | null> {
  try {
    const response = await axiosClient.get<HeaderData>("/header");
    return response.data;
  } catch (error) {
    console.error("Error fetching header data:", error);
    return null;
  }
}
