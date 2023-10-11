import axios from "axios";

export async function getVideoList(videoName) {
  try {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: videoName,
          part: "snippet",
          key: apiKey,
          maxResults: 10,
          type: "video",
        },
      }
    );

    const videoList = response.data.items.map((video) => {
      return {
        title: video.snippet.title,
        videoId: video.id.videoId,
        thumbnail: video.snippet.thumbnails.default.url,
        channelTitle: video.snippet.channelTitle,
        liveBroadcastContent:
          video.snippet.liveBroadcastContent === "live" ? true : false,
      };
    });

    return videoList;
  } catch (error) {
    console.log("Error searching videos: ", error);
    return [];
  }
}

export async function getVideoDetail(videoId) {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}`,
    {
      params: {
        key: apiKey,
      },
    }
  );

  const videoTitle = response.data.items[0].snippet.title;
  const description = response.data.items[0].snippet.description;
  const likeCount = response.data.items[0].statistics.likeCount;
  const viewCount = response.data.items[0].statistics.viewCount;
  const commentCount = response.data.items[0].statistics.commentCount;

  const videoData = {
    description: description,
    likeCount: likeCount,
    videoTitle: videoTitle,
    viewCount: viewCount,
    commentCount: commentCount,
  };

  return videoData;
}
