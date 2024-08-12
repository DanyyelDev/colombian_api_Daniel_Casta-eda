import { apiColobiaUrls } from "./urls";

export const getTouristicAttraction = async () => {
  try {
    const apiUrl = apiColobiaUrls.touristicAttraction.all
    const response = await fetch(apiUrl)

    return response

  } catch (error) {
    throw error;
  }
};
