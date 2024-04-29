import React from "react";
import { CiShare1 } from "react-icons/ci";

const Card = ({name,image,linkto}) => {
  return (
    <div>
      <div className="Card w-full flex flex-col gap-4 h-60 shadow-sm shadow-blue-200 transform hover:translate-y-3 hover:duration-200 p-5 bg-blue-950">
        
        <div className="icons flex justify-between ">
          <img className="w-60 h-30" src={image} alt="" />
          <a className="text-3xl" href={linkto} target="_blank"><CiShare1 /></a>
        </div>
        <div className="name text-xl font-bold">{name}</div>
        {/* <div className="desc flex items-start gap-3 font-semibold">
            {desc}
        </div> */}

      </div>
    </div>
  );
};

export default Card;
