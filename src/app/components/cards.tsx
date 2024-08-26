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

export default function Card({ prop }: { prop: Props }){
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            className="bg-neutral-800 w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] border-1 rounded-lg p-2"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
        >
            {/* Decorative Dots */}
            <div className="flex flex-row pl-2">
                <p className="text-emerald-200"><GoDotFill /></p>
                <p className="text-bg"><GoDotFill /></p>
            </div>
            
            {/* Project Image */}
            <Image
                src={prop.img}
                alt={prop.title}
                height={0}
                width={1440}
                className="w-full h-[65%] rounded-2xl transition-transform hover:scale-95"
            />
            
            {/* Project Details and Link */}
            <Link href={prop.route} className="group block">
                <div className="pl-5 pt-2 flex items-center justify-between">
                    <div className="space-y-2">
                        <h1 className="text-2xl text-text2 font-bold">{prop.title}</h1>
                        
                        {/* Responsive Description */}
                        <p className="text-text2 text-sm sm:text-base lg:text-lg line-clamp-2 sm:line-clamp-3 lg:line-clamp-4">
                            {prop.description}
                        </p>
                    </div>

                    {/* Arrow Icon with Hover Effect */}
                    <div className="transform transition-transform pr-2 duration-300 group-hover:rotate-45">
                        <MdArrowOutward className="text-white" />
                    </div>
                </div>
            </Link>
        </div>
    );
}