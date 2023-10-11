import { useState, useContext } from "react";
import { YoutubeVideoContext } from "../context/YoutubeVideoContext";
import { FiSearch } from "react-icons/fi";

export function SearchBar() {
  const { searchVideo } = useContext(YoutubeVideoContext);

  const [videoName, setVideoName] = useState("");

  const handleValueVideoName = (event) => {
    setVideoName(event.target.value);
  };

  return (
    <div className="flex items-center">
      <div className="m-1 flex-1">
        <input
          type="text"
          className="border rounded-md py-2 px-3 text-gray-700  focus:outline-none w-full"
          onChange={handleValueVideoName}
        />
      </div>

      <div>
        <button
          className={` ${
            videoName.length === 0 ? "bg-red-800" : "bg-red-700"
          }  rounded-md py-3 px-4 text-white font-semibold hover:bg-red-800 transition-all ease-out`}
          disabled={videoName.length === 0}
          onClick={() => {
            searchVideo(videoName);
          }}
        >
          <FiSearch />
        </button>
      </div>
    </div>
  );
}
