import { apiColobiaUrls } from "./urls";

export const getAirPort = async () => {
  try {
    const apiUrl = apiColobiaUrls.airports.all;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response;   

  } catch (error) {
    throw error;
  }
};