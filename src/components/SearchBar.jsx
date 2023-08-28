import { useContext } from "react";
import { YoutubeVideoContext } from "../context/YoutubeVideoContext";

export function SearchBar() {
  const { updateSearchVideoValue } = useContext(YoutubeVideoContext);

  const handleValueVideoName = (event) =>{
    updateSearchVideoValue(event.target.value)
  }

  return(
    <div>
      <input type="text" onChange={handleValueVideoName}/>
      <button className="bg-red-700 rounded-md px-3 py-1.5 text-white font-semibold hover:bg-red-800">Search Video</button>
    </div>
  )
}
