import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import React from 'react';

export default function TechStack() {
  return (
    <div className="overflow-hidden w-full">
      <div>
        <h1 className="flex justify-center pt-24 pb-16 text-5xl font-bold tracking-widest underline text-primary decoration-primaryHover  hover:animate-pulse">
          Tech Stack
        </h1>
      </div>
      <div className="flex justify-center items-center bg-primary py-6">
        <div className="flex space-x-32 text-5xl text-textMuted animate-auto-scroll whitespace-nowrap">
          <p className="text-blue-600  hover:animate-ping">
            <FaCss3Alt size={60} />
          </p>
          <p className="text-orange-400 hover:animate-ping">
            <FaHtml5 size={60} />
          </p>
          <p className="text-yellow-500  hover:animate-ping ">
            <IoLogoJavascript size={60} />
          </p>
          <p className="text-black  hover:animate-ping">
            <RiNextjsFill size={60} />
          </p>
          <p className="text-blue-800  hover:animate-ping ">
            <FaPython size={60} />
          </p>
          <p className="text-blue-500  hover:animate-ping ">
            <RiTailwindCssFill size={60} />
          </p>
          <p className="text-blue-600  hover:animate-ping">
            <FaCss3Alt size={60} />
          </p>
          <p className="text-orange-400  hover:animate-ping">
            <FaHtml5 size={60} />
          </p>
          <p className="text-yellow-500  hover:animate-ping">
            <IoLogoJavascript size={60} />
          </p>
          <p className="text-black  hover:animate-ping ">
            <RiNextjsFill size={60} />
          </p>
          <p className="text-blue-800  hover:animate-ping">
            <FaPython size={60} />
          </p>
          <p className="text-blue-500  hover:animate-ping ">
            <RiTailwindCssFill size={60} />
          </p>
        </div>
      </div>
    </div>
  );
}