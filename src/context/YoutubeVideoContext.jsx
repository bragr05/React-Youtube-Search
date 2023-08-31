import { createContext, useState } from "react";
import { getVideoList } from "./youtubeVideoService.js";

export const YoutubeVideoContext = createContext();

export function YoutubeVideoContextProvider({ children }) {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('')

  const searchVideo = async (videoName) => {
    const videos = await getVideoList(videoName);
    setVideoList(videos);
  };


  const contextValue = {
    searchVideo,
    videoList,
    setSelectedVideo,
    selectedVideo
  };

  return (
    <>
      <YoutubeVideoContext.Provider value={contextValue}>
        {children}
      </YoutubeVideoContext.Provider>
    </>
  );
}
