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
    useEffect(() => { AOS.init() }, [])
    return (

        <div className="bg-neutral-800 w-full h-[350px] sm:h-[400px] border-1 rounded-lg p-1  "
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
        >
            <div className="flex flex-row pl-2" >
                <p className="text-emerald-200">
                    <GoDotFill />
                </p>
                <p className="text-bg">
                    <GoDotFill />
                </p>

            </div>
            <Image
                src={`${prop.img}`}
                alt={""}
                height={0}
                width={1440}
                className="w-full h-[65%] pb-4 pt-1 rounded-2xl rounded-b-3xl transition-transform hover:scale-95"
            />
            <Link href={prop.route} className="group block">
                <div className="pl-5 pt-1 flex items-center  justify-between">
                    <div className="pb-3 space-y-2">
                        <h1 className="text-2xl text-text2 font-bold">{prop.title}</h1>
                        <p className="text-text2 text-md ">{prop.description}</p>
                    </div>
                    <div className="transform transition-transform pr-2 duration-300 group-hover:rotate-45">
                        <MdArrowOutward className="text-white" />
                    </div>
                </div>
            </Link>
        </div>


    )
}