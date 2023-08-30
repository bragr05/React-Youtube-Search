import { createContext, useState } from "react";
import { getVideoList } from "./youtubeVideoService.js";

export const YoutubeVideoContext = createContext();

export function YoutubeVideoContextProvider({ children }) {
  const [videoList, setVideoList] = useState([]);

  const searchVideo = async (videoName) => {
    const videos = await getVideoList(videoName);
    console.log(videos);
  };

  const contextValue = {
    searchVideo,
  };

  return (
    <>
      <YoutubeVideoContext.Provider value={contextValue}>
        {children}
      </YoutubeVideoContext.Provider>
    </>
  );
}
