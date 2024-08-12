import { apiColobiaUrls } from "./urls";

export const getPresidents = async () => {
  try {
    const apiUrl = apiColobiaUrls.presidents.all;
    const response = await fetch(apiUrl, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response;
  } catch (error) {
    throw error;
  }
};
