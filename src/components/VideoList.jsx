import { useContext } from "react";
import { YoutubeVideoContext } from "../context/YoutubeVideoContext";
import { VideoDetail } from "./VideoDetail";

export function VideoList() {
  const { videoList, setSelectedVideo, videoDetail } =
    useContext(YoutubeVideoContext);

  return (
    <div className="m-1 mt-5">
      {videoList.map((video, index) => (
        <div
          onClick={() => {
            setSelectedVideo(video.videoId);
            videoDetail(video.videoId);
          }}
          key={index}
          className="flex mb-2 border-b-2 border-[#f9f9f9]"
        >
          <VideoDetail video={video} />
        </div>
      ))}
    </div>
  );
}
