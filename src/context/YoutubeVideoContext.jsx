import { createContext, useState } from "react";
import { getVideoList } from "./youtubeVideoService.js";
import { getVideoDetail } from "./youtubeVideoService.js";

export const YoutubeVideoContext = createContext();

export function YoutubeVideoContextProvider({ children }) {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [dataVideoDetail, setVideoDetail] = useState(JSON.parse("{}"));

  const searchVideo = async (videoName) => {
    const videos = await getVideoList(videoName);
    setSelectedVideo("");
    setVideoList(videos);
  };

  const videoDetail = async (videoID) => {
    const videoData = await getVideoDetail(videoID);
    setVideoDetail(videoData);
  };

  const contextValue = {
    searchVideo,
    videoList,
    setSelectedVideo,
    selectedVideo,
    videoDetail,
    dataVideoDetail,
  };

  return (
    <>
      <YoutubeVideoContext.Provider value={contextValue}>
        {children}
      </YoutubeVideoContext.Provider>
    </>
  );
}
