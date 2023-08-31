import { useContext, useState, useEffect } from "react";
import { YoutubeVideoContext } from "../context/YoutubeVideoContext";

export function VideoPlayer() {
  const { selectedVideo } = useContext(YoutubeVideoContext);

  if (selectedVideo) {
    let videoUrl = `https://www.youtube.com/embed/${selectedVideo}?autoplay=1`;

    return (
      <div className="aspect-video flex items-center justify-center p-1 mt-2">
        <iframe className="w-full h-full" src={videoUrl} />
      </div>
    );
  }
}
