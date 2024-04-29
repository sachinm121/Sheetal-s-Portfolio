import React from "react";
import styles from "./Contact.module.css";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiKaggle } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className={`${styles.Contact} lg:px-32 lg:flex lg:flex-col justify-start lg:justify-center lg:items-center lg:mx-14`}
    >
      <div className="flex flex-col mt-8 lg:mt-0">
        <div className={`${styles.title} text-3xl mb-5`}>
          <h1 className="font-bold text-[#03fcc6]">Get in touch</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-24 items-start">
          <div className="text-[24px] text-gray-300 text-justify md:w-[50%] lg:w-[40%]">
            If you have any questions, please feel free to drop me a line. If
            you don't get an answer immediately, I might just be travelling
            through the middle of nowhere. I'll get back to you as soon as I
            can. That's a promise!
          </div>

          <div>
            <p className="text-[24px] font-bold border-b-4 border-blue-500 pb-3">
              Find Sheetal elsewhere
            </p>
            <div className="grid grid-cols-2 mt-5 gap-4 text-[30px]">
              <a
                href="https://www.linkedin.com/in/sheetal-jain-0030001b5/"
                target="_blank"
              >
                <FaLinkedin className="hover:text-[#03fcc6]" />
              </a>
              <a href="https://github.com/SimmiSheetalJain" target="_blank">
                <IoLogoGithub className="hover:text-[#03fcc6]" />
              </a>
              <a href="">
                <FaWhatsapp className="hover:text-[#03fcc6]" />
              </a>
              <a href="">
                <FaTwitter className="hover:text-[#03fcc6]" />
              </a>
              <SiKaggle className="hover:text-[#03fcc6]" />
              <a
                href="https://www.youtube.com/channel/UC6c8iZ5p2v5XgLg-0mX141Q"
                target="_blank"
              >
                <FaYoutube className="hover:text-[#03fcc6]" />
              </a>
            </div>
          </div>
        </div>
        <a
          className="mt-10 object-fill w-fit"
          href="mailto:sheetaljainladoo11@gmail.com"
        >
          <button className="bg-yellow-600 px-5 py-3 rounded-md text-[20px] font-bold hover:bg-yellow-500">
            Write Sheetal
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
