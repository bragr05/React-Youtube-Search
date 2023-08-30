import { useState, useContext } from "react";
import { YoutubeVideoContext } from "../context/YoutubeVideoContext";

export function SearchBar() {
  const { searchVideo } = useContext(YoutubeVideoContext);

  const [videoName, setVideoName] = useState("");

  const handleValueVideoName = (event) => {
    setVideoName(event.target.value);
  };

  return (
    <div className="flex">
      <div className="m-1 flex-1">
        <input
          type="text"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
          onChange={handleValueVideoName}
        />
      </div>

      <div className="m-1 flex-2">
        <button
          className={` ${
            videoName.length === 0 ? "bg-red-800" : "bg-red-700"
          }  rounded-md px-3 py-1.5 text-white font-semibold hover:bg-red-800 w-full`}
          disabled={videoName.length === 0}
          onClick={() => {
            searchVideo(videoName);
          }}
        >
          Search Video
        </button>
      </div>
    </div>
  );
}
