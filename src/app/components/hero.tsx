import React from 'react'
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import typewriter from "./home.module.css"
export default function Hero() {
  return (
    <div className=" w-full text-neutral-300">
      <div className="flex justify-center pt-10">
        <button className="bg-text border-cyan-100  border-y-2 divide-x-0 space-x-2 rounded-l-full py-[0.5rem] text-sm flex items-center justify-center text-neutral-300 rounded-r-full px-4">
          <p className="text-emerald-400">
            <GoDotFill />{" "}

          </p>
          <p className={`${typewriter.typewriter}`}>It&#39;s me <b>Syed Shurem Ali🙎🏻‍♂️</b></p>
        </button>
      </div>
      <div className="flex justify-center bg-bg pt-7">
        <Image
          src={"/dp.jpg"}
          width={70}
          height={0}
          alt=""
          className="rounded-full w-auto" />
      </div>
      <div className="text-emerald-300  flex flex-col items-center justify-center pt-6">
        <p className='text-2xl md:text-5xl font-bold text-center leading-snug'>


          Websites Designing

          <br />
          that drive Conversions

        </p>
      </div>
      <div className="text-emerald-200 flex flex-col items-center justify-center pt-6">
        <p className="text-md md:text-xl  text-center leading-snug">
          <b>AIM</b> to Design and develop visually stunning
          <br />
          and technically proficient websites for
          <br />
          clients worldwide.
        </p>
      </div>{" "}
      <div className="flex items-center justify-center pt-7"><button className="bg-black text-emerald-500 hover:text-neutral-300 py-3 px-7 rounded-full relative"> 📧Shuremsyed41@gmail.com</button></div>

    </div>
  )
}