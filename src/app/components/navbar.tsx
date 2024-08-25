// "use client";
// import React from 'react'
// import Link from 'next/link'
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";


// export default function Navbar() {
//   const [Open, setOpen] = useState(false);
//   return (
//     <header className="bg-black top-0 z-10 sticky w-full transition-transform shadow-xl text-emerald-400 py-3 px-5 items-center flex justify">

//     <Link href={"/"}>
//     <div className='flex items-center space-x-4 bg-black text-emerald-300  '>
// <h1 className='text-3xl font-bold  text-text2 italic font-serif '>
//   SSA
//   </h1>

//   </div>
//   </Link>
//   <div className="absolute left-1/2 transform -translate-x-1/2">
//   <nav className="hidden md:flex gap-14 ">
//   <ul className='flex space-x-4 text-emerald-600'>
//   <li><Link className='hover:text-neutral-400 hover:underline underline-offset-2' href={"./about"}> About </Link></li>
//  <li><Link className='hover:text-neutral-400 hover:underline underline-offset-2'href={"./portfolio"}>Projects</Link></li>
//    <li><Link className='hover:text-neutral-400 hover:underline underline-offset-2'href={"./contact"}>ContactUs</Link></li>
//     </ul>
//   </nav>
//   </div>

// <div className="md:hidden ">
//         <button className='bg-emerald-300' onClick={() => setOpen(!Open)} aria-label="Toggle Menu">
//           {Open ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </div>
//       {Open && (
//         <nav className="absolute top-16 left-0 right-0 bg-text text-emerald-300 text-center">
//           <ul className="flex flex-col gap-4 py-4 text-text2">
//             <li><Link href="#portfolio" className="hover:underline underline-offset-2">Project</Link></li>
//             <li><Link href="#about" className="hover:underline underline-offset-2">About</Link></li>
//             <li><Link href="#contact" className="hover:underline underline-offset-2">Contact Me</Link></li>
//           </ul>
//         </nav>
//       )}


//   </header>  
// );
// }

"use client";
import Link from 'next/link';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [Open, setOpen] = useState(false);

  return (
    <header className="bg-black top-0 z-10 sticky w-full transition-transform shadow-xl text-emerald-400 py-3 px-5 flex items-center justify-between">

      {/* Logo Section */}
      <Link href="/">
        <div className='flex items-center space-x-4 text-emerald-300'>
          <h1 className='text-3xl font-bold italic font-serif'>
            SSA
          </h1>
        </div>
      </Link>

      {/* Centered Navigation for larger screens */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className='flex space-x-14 text-emerald-600'>
          <li><Link className='hover:text-neutral-400 hover:underline underline-offset-2' href="/about">About</Link></li>
          <li><Link className='hover:text-neutral-400 hover:underline underline-offset-2' href="/portfolio">Projects</Link></li>
          <li><Link className='hover:text-neutral-400 hover:underline underline-offset-2' href="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu Button aligned to the right */}
      <div className="md:hidden flex-1 flex justify-end">
        <button className='bg-emerald-300' onClick={() => setOpen(!Open)} aria-label="Toggle Menu">
          {Open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {Open && (
        <nav className="absolute top-16 left-0 right-0 bg-black text-emerald-300 text-center">
          <ul className="flex flex-col gap-4 py-4">
            <li><Link href="/portfolio" className="hover:underline underline-offset-2">Projects</Link></li>
            <li><Link href="/about" className="hover:underline underline-offset-2">About</Link></li>
            <li><Link href="/contact" className="hover:underline underline-offset-2">Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}