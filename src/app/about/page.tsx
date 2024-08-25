"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function About() {
  useEffect(() => { AOS.init() }, [])
  return (
    <div className='bg-black py-8 text-text2'> 
    <div>
        <h1 className="flex justify-center pt-8 pb-16 text-5xl font-bold tracking-widest text-emerald-300 underline">
          About Me
        </h1>
      </div>
      <div>
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-center gap-3">
         <div
            className="h-[300px] w-[300px] md:w-[455px]  border-neutral-600 bg-text rounded-3xl"
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div className="flex justify-center items-center pt-16">
            <Image
            src={"/dp.jpg"}
            alt="Profile Picture"
            width={150} 
            height={0} 
            className="rounded-full shadow-lg h-auto"
          />

            </div>

        </div>
        <div
            className="h-[355px] w-full md:w-[755px] border-neutral-600 text-emerald-300 bg-text rounded-3xl"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <p className=" pt-9 px-14  tracking-wider text-md text-emerald-500 font-bold">
              I am Syed Shurem ALi.
              <br />
              <br />
              </p>
              <p className="text-emerald-300">
              I&#39;m a front-end developer passionate about webDeveloper user-friendly web interfaces. Over the past 2.5 years, I&#39;ve been learning and refining my skills in front-end technologies through various hands-on projects. I have a foundational understanding of Wordpress, having completed a Dit course in the field. 
            </p>
          
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}