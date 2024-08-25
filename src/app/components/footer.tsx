import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";
//import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-8 text-text2 ">
      <div className='max-w-7xl max-h-20xl h-full max-auto text-center space-y-6'>
        <div className='bg-emerald-600 py-6 px-10 text-text2 font-medium border-y-2 border-opacity-5 border-neutral-400'>
          <div className='max-w-full mx-auto text-center space-y-6'>
            <div className="text-lg">
              <p className=" hidden md:block text-emerald-200">
                Interested with me? Send me a message at : {"   "}{" "}
                <button className="bg-white  text-emerald-300 py-3 px-7  rounded-md relative">
                  {" "}
                  shuremsyed41@gmail.com
                </button>
              </p>
              <button className="bg-black text-emerald-300 py-3 px-7  rounded-md relative md:hidden">
                {" "}
                Shuremsyed41@gmail.com
              </button>

            </div>
          </div>
        </div>
        <div className="text-emerald-300 justify-center gap-6 text-md grid grid-cols-1 md:grid-rows-1 lg:flex">
          <Link href="/about" className="hover:scale-95">
            About
          </Link>
          <Link href="/project" className="hover:scale-95">
            Project
          </Link>
          <Link href="/contact" className="hover:scale-95">
            Contact
          </Link>
        </div>
        <div className="flex justify-center">
          <Image
            src="/dp.jpg"
            alt="Footer Image"
            width={50}
            height={0}
            className="rounded-full h-auto"
          />
        </div>
        <div className="flex justify-center space-x-6 text-3xl ">

          <Link
            href="//linkedin.com/in/syed-shurem-ali-5a55852a0"
            aria-label="LinkedIn"
            className="text-white hover:text-emerald-200"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/shuremali02"
            aria-label="GitHub"
            className="text-white hover:text-emerald-200"
          >
            <FaGithub />
          </Link>
          <Link
            href="//"
            aria-label="Facebook"
            className="text-white hover:text-emerald-200"
          >
            <FaFacebook />
          </Link>
        </div>
        <div className="text-sm pb-2 text-emerald-300 font-medium">
          All rights reserved. &copy; Copyright{" "}
          <Link href="/">
            Syed Shurem Ali
          </Link>{" "}
          2024
        </div>


      </div>
    </footer>



  )
}
