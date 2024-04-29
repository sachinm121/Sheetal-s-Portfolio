import React from "react";
import styles from "./Skills.module.css";
import MotionCard from "./MotionCard";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import github from "../../assets/skills/github.png"
import c from "../../assets/skills/c.png"
import cplus from "../../assets/skills/cplus.png"
import python from "../../assets/skills/python.png"
import matplotlib from "../../assets/skills/matplotlib.png"
import scikit from "../../assets/skills/scikit.png"
import pandas from "../../assets/skills/pandas.png"
import numpy from "../../assets/skills/numpy.png"


const Skills = () => {
  return (
    <div className={`${styles.Skills} lg:px-32 lg:flex lg:flex-col justify-center lg:h-[100vh]`}>
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px]">
          Skills
        </h1>
        <div className="border-b-4 border-solid border-blue-100 p-1 w-16"></div>
      </div>
      <div className="skills mt-4 flex flex-row gap-3 flex-wrap justify-center lg:w-[70%] m-auto">
        <MotionCard image={html} />
        <MotionCard image={css} />
        <MotionCard image={python} />
        <MotionCard image={c} />
        <MotionCard image={cplus} />
        <MotionCard image={github} />
        <MotionCard image={matplotlib} />
        <MotionCard image={numpy} />
        <MotionCard image={pandas} />
        <MotionCard image={scikit} />
      </div>
    </div>
  );
};

export default Skills;

// border-2 border-solid border-green-500
// border-2 border-solid border-yellow-400
