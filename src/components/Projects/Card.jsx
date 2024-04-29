import React from "react";
import { CiShare1 } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";

const Card = ({name, desc, github, image, demo, tech, flag }) => {
  return (
    <div className="mt-5">
      <div className={`card flex flex-col-reverse ${flag ? "lg:flex-row-reverse": "lg:flex-row" } justify-between gap-6 md:gap-9 mb-10`}>
        <div className="group lg:w-[50%]"><img className="transition-opacity duration-300 filter brightness-50 group-hover:brightness-100" src={image} alt="" /></div>
        <div className="flex flex-col gap-3 lg:w-[50%]">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-200">{name}</h1>
          <p className="bg-[#172a45] md:text-2xl lg:text-xl lg:w-[70%] p-5">{desc}</p>
          <div className="flex flex-row gap-2 md:text-xl text-[#64ffda]">
            {
              tech.map((ele,ind)=>(
                <div >{ele}</div>
              ))
            }
          </div>
          <div className="flex flex-row gap-3 mt-2 text-3xl md:text-4xl lg:text-3xl">
            <a href={github}><IoLogoGithub /></a>
            <a href={demo} target="_blank"><CiShare1 /></a>
          </div>
        </div>
      </div>
      <hr className="text-gray-900 border-gray-700"/>
    </div>
  )
}

export default Card