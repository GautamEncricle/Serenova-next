import axiosClient from "@/lib/axiosClient";
import { FooterData } from "@/types/footerTypes";

export async function fetchFooterData(): Promise<FooterData> {
  const res = await axiosClient.get("/footer");
  return res.data;
}
