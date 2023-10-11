import { YoutubeVideoContext } from "../context/YoutubeVideoContext";
import { useContext, useState } from "react";
import { AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";

export function VideoInformation() {
  const { dataVideoDetail } = useContext(YoutubeVideoContext);
  const [showDescription, setShowDescription] = useState(false);

  const handleOnClick = () => {
    showDescription ? setShowDescription(false) : setShowDescription(true);
  };

  const { description, likeCount, videoTitle, commentCount, viewCount } =
    dataVideoDetail;

  return (
    <div className="p-2">
      <h1 className="font-semibold md:text-xl flex border-b-2 border-[#f9f9f9] pb-4">
        {videoTitle}
      </h1>

      <div className="flex my-2 items-center sm:justify-normal justify-center space-x-6">
        <div className="flex my-2 items-center space-x-2">
          <AiOutlineLike className="text-xl" />
          <p>{likeCount}</p>
        </div>

        <div className="flex my-2 items-center space-x-2">
          <AiOutlineEye className="text-xl" />
          <p>{viewCount}</p>
        </div>

        <div className="flex my-2 items-center space-x-2">
          <LiaCommentSolid className="text-xl" />
          <p>{commentCount}</p>
        </div>
      </div>

      <button
        className=" w-full rounded-3xl p-2 my-2  border-solid border-[1px] border-gray-700 text-gray-700 font-semibold hover:bg-[#f9f9f9] transition-all ease-out hover:border-[#f9f9f9]"
        onClick={handleOnClick}
      >
        {showDescription ? "Hide description" : "Show description"}
      </button>
      {showDescription && (
        <div className="bg-[#f9f9f9] rounded-lg p-4 text-sm leading-normal">
          {description.split("\n\n").map((paragraph) => (
            <>
              {paragraph.split("\n").map((line) => (
                <p>{line}</p>
              ))}
              <br />
            </>
          ))}
        </div>
      )}
    </div>
  );
}
