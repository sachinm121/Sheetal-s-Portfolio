import React from "react";
import styles from "./Articles.module.css";
import rr from "../../assets/articles/RR1.jpg"
import ai from "../../assets/articles/AI.jpg"
import Card from "./Card";
import { FaStar } from "react-icons/fa";
import { ArticlesFile } from "./ArticlesFile";

const Articles  = () => {
  return (
    <div
      className={`${styles.Coding} lg:px-32 lg:flex lg:flex-col justify-center `}
    >
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px]">
          Articles 
        </h1>
        <div className="border-b-4 border-solid border-blue-100 p-1 w-16"></div>
      </div>
      <div className="coding mt-8 flex flex-col gap-7 lg:grid lg:grid-cols-2">
        {
          ArticlesFile.map((ele,idx) => (
            <Card 
              name={ele.name}
              linkto={ele.link}
              image={ele.image}
              key={idx}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Articles;
