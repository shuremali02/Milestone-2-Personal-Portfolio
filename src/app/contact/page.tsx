import React from 'react'
import Link from 'next/link';


export default function Contact() {
  return (
    <section className="bg-black py-8 text-emerald-300">
      <div>
        <h1 className="flex justify-center pt-8 pb-15 text-5xl font-bold font-i tracking-widest text-text2 underline ">
          Contact Me
        </h1>
        <br />

        <div className="flex items-center justify-center">
          <div
            className="h-[200px] w-full md:w-[480px] border-emerald-400 bg-emerald-600 rounded-3xl hover:animate-pulse hover:bg-gradient-to-br from-button1 to-button2"
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div className="flex justify-center items-center pt-16 hover:animate-pulse rounded-3xl">
              {/* <Link  href='mailto:shuremsyed41@gmail.com'>
            <button className="bg-emerald-300 border-neutral-200 border-y-1 rounded-l-full rounded-r-full text-lg flex items-center justify-center font-bold text-text2 py-4 px-14">
          <p >Get in Touch</p>
            </button> 
            </Link> */}
              <Link href='mailto:shuremsyed41@gmail.com'>
                <button className="bg-stone-950 border-neutral-200 border-y-1 rounded-l-full rounded-r-full text-lg flex items-center justify-center font-bold text-text2 py-4 px-14">
                  <p>Get in Touch</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
