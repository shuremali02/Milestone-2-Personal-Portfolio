import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background py-8 text-textMuted">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-6">

        {/* Contact Banner */}
        <div className="bg-surface py-6 px-10 text-primary font-medium border-y border-border">
          <div className="text-center text-lg">
            <p className="hidden md:block text-primary">
              Interested in connecting? Send me a message at:{" "}
              <button className="bg-white text-primary py-3 px-7 rounded-md shadow-md hover:bg-primary hover:text-background transition-all">
                📧 shuremsyed41@gmail.com
              </button>
            </p>
            <button className="bg-background text-primary py-3 px-7 rounded-md md:hidden border border-border hover:bg-primary hover:text-background transition-all">
              📧 shuremsyed41@gmail.com
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-primary text-md grid grid-cols-1 md:grid-cols-3 lg:flex lg:justify-center lg:space-x-6">
          <Link href="/#skills" className="hover:underline text-center hover:text-primaryHover transition">
            Skills
          </Link>
          <Link href="/#testimonials" className="hover:underline text-center hover:text-primaryHover transition">
            Testimonials
          </Link>
          <Link href="/portfolio" className="hover:underline text-center hover:text-primaryHover transition">
            Project
          </Link>
          <Link href="/about" className="hover:underline text-center hover:text-primaryHover transition">
            About
          </Link>
          <Link href="/contact" className="hover:underline text-center hover:text-primaryHover transition">
            Contact
          </Link>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg"
            alt="Footer Image"
            width={130}
            height={130}
            className="rounded-full border border-border shadow-md"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-2xl lg:text-3xl text-primary">
          <Link
            href="//linkedin.com/in/syed-shurem-ali-5a55852a0"
            aria-label="LinkedIn"
            className="hover:text-primaryHover transition"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/shuremali02"
            aria-label="GitHub"
            className="hover:text-primaryHover transition"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.facebook.com/syed.shuremali?mibextid=ZbWKwL"
            aria-label="Facebook"
            className="hover:text-primaryHover transition"
          >
            <FaFacebook />
          </Link>
          <Link
            href="//linkedin.com/in/syed-shurem-ali-5a55852a0"
            aria-label="Instagram"
            className="hover:text-primaryHover transition"
          >
            <FaInstagram />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center text-textMuted font-medium">
          All rights reserved. &copy; Copyright{" "}
          <Link href="/" className="hover:text-primaryHover transition">
            Syed Shurem Ali
          </Link>{" "}
          2024
        </div>
      </div>
    </footer>
  );
}
