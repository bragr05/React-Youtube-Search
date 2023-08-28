import { createContext, useState } from "react";

export const YoutubeVideoContext = createContext();

export function YoutubeVideoContextProvider({ children }) {
  const [searchVideo, setSearchVideo] = useState("");

  function updateSearchVideoValue(nameVideoSearch) {
    setSearchVideo(nameVideoSearch);
    console.log(searchVideo);
  }

  const contextValue = {
    updateSearchVideoValue,
  };

  return (
    <>
      <YoutubeVideoContext.Provider value={contextValue}>
        {children}
      </YoutubeVideoContext.Provider>
    </>
  );
}
