"use client";
import Image from "next/image";
import 'aos/dist/aos.css';
import Link from "next/link";
import { useEffect } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import AOS from 'aos';

interface Props {
  title: string;
  description: string;
  img: string;
  route: string;
}

export default function Card({ prop }: { prop: Props }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="bg-surface w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] border border-border rounded-xl p-2 shadow-lg hover:shadow-primary/30 transition-shadow duration-500"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
    >
      {/* Decorative Dots */}
      <div className="flex flex-row pl-2 space-x-1">
        <GoDotFill className="text-primary" />
        <GoDotFill className="text-muted" />
      </div>

      {/* Project Image */}
      <Image
        src={prop.img}
        alt={prop.title}
        width={1440}
        height={0}
        className="w-full h-[65%] rounded-xl object-cover transition-transform hover:scale-95"
      />

      {/* Project Details and Link */}
      <Link href={prop.route} className="group block pt-2 px-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h1 className="text-lg sm:text-xl font-semibold text-textMain">{prop.title}</h1>
            <p className="text-sm sm:text-base text-textMuted line-clamp-2 sm:line-clamp-3 lg:line-clamp-4">
              {prop.description}
            </p>
          </div>

          {/* Arrow Icon */}
          <div className="pr-1 pt-1 transform transition-transform duration-300 group-hover:rotate-45">
            <MdArrowOutward className="text-primary" />
          </div>
        </div>
      </Link>
    </div>
  );
}
