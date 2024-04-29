import React from "react";
import styles from "./About.module.css";
import Sachin from "../../assets/about/Sheetal.jpg";
import { FaArrowRight } from "react-icons/fa";
import TextColorChange from "../TextColorChange";

const About = () => {
  return (
    <div className={`${styles.About} lg:px-32`}>
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px]">About Me</h1>
        <div className="border-b-4 border-solid border-blue-100 p-1 w-16"></div>
      </div>
      <div className="container w-full h-[80vh] flex flex-col items-center gap-3  mt-5 mb-20 lg:flex-row lg:justify-between lg:mt-2">
        <div className="data w-full lg:w-[60%]">
          <p className="text-[18px] font-bold md:text-[30px] lg:text-[28px]">Education:</p>
          <div className="pg flex gap-2 text-blue-100 md:text-[25px]">
            &#187;
            <p className="text-[16px] flex flex-row items-start md:text-[25px] lg:text-[22px]">
              Master of Computer Applications(AIML), LNCT Bhopal (Pursuing)
            </p>
          </div>
          <div className="ug flex gap-2 text-blue-100 md:text-[25px]">
            &#187;
            <p className="text-[16px] flex flex-row items-start md:text-[25px] lg:text-[22px]">
              Bachelor of Computer Applications(BCA), Raja Balwant Singh
              College, Agra
            </p>
          </div>
          <div className="about">
            <p className="text-[15px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ad id, temporibus cumque a voluptas minima deleniti dolorem praesentium? Voluptate ratione deleniti a repellat, itaque, exercitationem, quae ea dolor corporis in commodi obcaecati saepe dolores explicabo aliquid! Officiis modi odio culpa corrupti inventore blanditiis, dolor dolorem cum accusamus deleniti, accusantium provident ex harum ab, et perspiciatis sint? Nihil qui excepturi voluptatibus necessitatibus distinctio corporis harum, quis laudantium facilis maiores ipsam deserunt aut impedit saepe magnam in quas eveniet aliquid vitae. Consequuntur itaque autem excepturi porro sequi vel fugit officia earum illo accusamus numquam, expedita nam praesentium recusandae. Ea, nihil expedita?
            </p>
          </div>
        </div>
        <div>
          <img className="w-[120px] md:w-[180px] lg:w-[270px] mt-5" src={Sachin} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default About;


// border-2 border-solid border-green-500
// border-2 border-solid border-yellow-400