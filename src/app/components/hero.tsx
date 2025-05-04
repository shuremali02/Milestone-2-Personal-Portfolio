import React from 'react';
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import typewriter from "./home.module.css";

export default function Hero() {
  return (
    <div className="w-full text-textMuted bg-background">
      {/* Top Intro Button */}
      <div className="flex justify-center pt-10">
        <button className="bg-surface border border-border space-x-2 rounded-full py-2 px-4 text-sm flex items-center justify-center text-textMuted shadow-md">
          <p className="text-primary">
            <GoDotFill />
          </p>
          <p className={`${typewriter.typewriter}`}>
            It&#39;s me <b className="text-primary">Syed Shurem Ali 🙎🏻‍♂️</b>
          </p>
        </button>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center pt-7">
        <Image
          src={"/dp.jpg"}
          width={70}
          height={70}
          alt="Syed Shurem Ali"
          className="rounded-full border border-border shadow-md"
        />
      </div>

      {/* Headline Text */}
      <div className="text-primary flex flex-col items-center justify-center pt-6">
        <p className="text-2xl md:text-5xl font-bold text-center leading-snug">
          Websites Designing
          <br />
          that drive Conversions
        </p>
      </div>

      {/* Sub Text */}
      <div className="text-textMain flex flex-col items-center justify-center pt-6">
        <p className="text-md md:text-xl text-center leading-snug">
          <b className="text-primary">AIM</b> to Design and develop visually stunning
          <br />
          and technically proficient websites for
          <br />
          clients worldwide.
        </p>
      </div>

      {/* Contact Button */}
      <div className="flex items-center justify-center pt-7">
        <button className="bg-primary text-background hover:bg-primaryHover hover:text-background py-3 px-7 rounded-full transition-all shadow-lg">
          📧 Shuremsyed41@gmail.com
        </button>
      </div>
    </div>
  );
}
