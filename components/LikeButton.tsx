import React, { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";


const LikeButton = () => {
  const [Liked, setLiked] = useState(false);


  return (
    <div className="gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {Liked ? (
          <div className=" bg-primary rounded-full p-2 md:p-4 text-[#F51997]" onClick={()=>{setLiked(false)}}>
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
          <div className=" bg-primary rounded-full p-2 md:p-4 text-white" onClick={()=>{setLiked(true)}}>
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LikeButton;
