import React from 'react'
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="bg-background py-8 text-textMuted">
      <div>
        <h1 className="flex justify-center pt-8 pb-15 text-5xl font-bold tracking-widest text-primary underline decoration-primaryHover hover:animate-pulse">
          Contact Me
        </h1>
        <br />

        <div className="flex items-center justify-center">
          <div
            className="h-[200px] w-full md:w-[480px] border-primary bg-primaryHover rounded-3xl hover:animate-pulse hover:bg-gradient-to-br from-button1 to-button2"
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div className="flex justify-center items-center pt-16 hover:animate-pulse rounded-3xl">
              {/* Get in Touch Button */}
              <Link href='mailto:shuremsyed41@gmail.com'>
                <button className="bg-surface border-neutral-200 border-y-1 rounded-full text-lg flex items-center justify-center font-semibold text-textMuted py-4 px-14 transition-all duration-300 ease-in-out transform hover:bg-primary hover:text-white hover:scale-105">
                  <p className='underline decoration-primaryHover'>Get in Touch</p>
                </button>
              </Link>
            </div>

            {/* Resume Button (Professional Look) */}
            <div className="flex justify-center items-center pt-8 hover:animate-pulse rounded-3xl">
              <Link href="https://docs.google.com/document/d/1TODtI3Vlb6YxTWCps0OVeUUz9We3kYlviq6Kwfl_p8E/edit?tab=t.0#heading=h.rfgvkg2ifhfd" target="_blank">
                <button className="bg-surface border border-primary text-primary rounded-full text-lg flex items-center justify-center font-semibold py-4 px-14 transition-all duration-300 ease-in-out transform hover:bg-primary hover:text-white hover:scale-105">
                  <p className='underline decoration-primaryHover'>View Resume</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
