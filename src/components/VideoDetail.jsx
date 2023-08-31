import { MdWifiTethering } from "react-icons/md";

export function VideoDetail({ video }) {
  return (
    <>
      <div className="flex-2 mr-2">
        <img src={video.thumbnail} alt="Image Video" className="rounded-md" />
      </div>
      <div className="flex-1 m-auto">
        <h1 className="text-slate-950 mb-1 text-sm font-semibold">
          {video.title}
        </h1>
        <h4 className="text-slate-950 text-xs capitalize">
          {" "}
          {video.channelTitle}
        </h4>
        <p className="bg-red-700 text-xs text-white rounded-md font-bold pr-1 pl-1 inline-flex items-center">
          {video.liveBroadcastContent && <MdWifiTethering className="mr-1" />}
          LIVE
        </p>
      </div>
    </>
  );
}
