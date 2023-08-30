import { createContext } from "react";

export const YoutubeVideoContext = createContext();

export function YoutubeVideoContextProvider({ children }) {
  const searchVideo = (videoName) => {
    alert(videoName);
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
