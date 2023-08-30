import axios from "axios";

export async function getVideoList(videoName) {
  try {
    console.log(videoName);
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    console.log(apiKey);
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: videoName,
          part: "snippet",
          key: apiKey,
          maxResults: 10,
        },
      }
    );

    const videoList = response.data.items.map((video) => {
      return {
        title: video.snippet.title,
        videoId: video.id.videoId,
        thumbnail: video.snippet.thumbnails.default.url,
      };
    });

    return videoList;
  } catch (error) {
    console.log("Error searching videos: ", error);
    return [];
  }
}
