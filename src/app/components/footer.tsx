import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-8 text-text2">
      {/* Footer container with background color, padding, and text color */}

      <div className='max-w-7xl mx-auto px-4 lg:px-8 space-y-6'>
        {/* Main content container with responsive padding and spacing */}

        <div className='bg-emerald-600 py-6 px-10 text-text2 font-medium border-y-2 border-opacity-5 border-neutral-400'>
          {/* Top section with background color, padding, text color, and border */}

          <div className='text-center'>
            {/* Centered text section */}

            <div className="text-lg">
              {/* Text section with large font size */}

              <p className="hidden md:block text-emerald-200">
                {/* Email contact for larger screens */}
                Interested in connecting? Send me a message at: {" "}
                <button className="bg-white text-emerald-300 py-3 px-7 rounded-md">
                  shuremsyed41@gmail.com
                </button>
              </p>
              <button className="bg-black text-emerald-300 py-3 px-7 rounded-md md:hidden">
                {/* Email contact for smaller screens */}
                Shuremsyed41@gmail.com
              </button>
            </div>
          </div>
        </div>

        <div className="text-emerald-300 text-md grid grid-cols-1 md:grid-cols-3 lg:flex lg:justify-center lg:space-x-6">
          {/* Navigation links with responsive grid and flex layout */}

          <Link href="/about" className="hover:scale-95 text-center">
            About
          </Link>
          <Link href="/portfolio" className="hover:scale-95 text-center">
            Project
          </Link>
          <Link href="/contact" className="hover:scale-95 text-center">
            Contact
          </Link>
        </div>

        <div className="flex justify-center">
          {/* Centered profile image */}

          <Image
            src="/dp.jpg"            // Path to the image
            alt="Footer Image"       // Alt text for accessibility
            width={80}               // Adjusted width for better visibility on larger screens
            height={80}              // Adjusted height to maintain aspect ratio
            className="rounded-full h-auto"
          />
        </div>

        <div className="flex justify-center space-x-6 text-2xl lg:text-3xl">
          {/* Social media icons container with spacing and responsive size */}

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
            href="https://www.facebook.com/syed.shuremali?mibextid=ZbWKwL" // Placeholder link
            aria-label="Facebook"
            className="text-white hover:text-emerald-200"
          >
            <FaFacebook />
          </Link>
        </div>

        <div className="text-sm text-center text-emerald-300 font-medium">
          {/* Copyright and rights reserved text */}

          All rights reserved. &copy; Copyright{" "}
          <Link href="/">
            Syed Shurem Ali
          </Link>{" "}
          2024
        </div>
      </div>
    </footer>
  );
}