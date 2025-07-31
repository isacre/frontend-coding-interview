import axios from "axios";
import type { PexelsPhotoResponse } from "./types";

const pexelsAPI = axios.create({
  baseURL: import.meta.env.VITE_PEXELS_API_BASE_ROUTE,
  headers: {
    Authorization: import.meta.env.VITE_PEXELS_API_KEY,
  },
});

export default pexelsAPI;

export async function getPhotos(
  search: string,
  limit: number
): Promise<PexelsPhotoResponse> {
  const response = await pexelsAPI.get(
    `search?query=${search}&per_page=${limit}`
  );
  return response.data;
}
