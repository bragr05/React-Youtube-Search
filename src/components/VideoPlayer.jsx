import { useContext } from "react";
import { YoutubeVideoContext } from "../context/YoutubeVideoContext";
import { VideoInformation } from "../components/VideoInformation";

export function VideoPlayer() {
  const { selectedVideo } = useContext(YoutubeVideoContext);

  if (selectedVideo) {
    let videoUrl = `https://www.youtube.com/embed/${selectedVideo}?autoplay=1`;

    return (
      <>
        <div className="aspect-video p-1 mt-2">
          <iframe className="w-full h-full" src={videoUrl} />
        </div>
        <VideoInformation />
      </>
    );
  }
}
