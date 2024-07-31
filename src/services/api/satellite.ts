import { env } from "@/utils/environment";
import axios from "axios";
export const satellite = axios.create({
  baseURL: env.client.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
