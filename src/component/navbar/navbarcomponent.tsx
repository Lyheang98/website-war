'use client';

import Link from "next/link";
import React from "react";
import { Kantumruy_Pro, Montserrat } from 'next/font/google'

const kantumruy = Kantumruy_Pro({
  subsets: ['khmer'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-kantumruy',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat',
})

export default function Navbar() {
  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 ">
      <nav className="z-10 sticky top-0 left-0 right-0 w-full px-5 py-2.5 lg:py-4">
  <div className="flex items-center justify-between w-full max-w-[1100px]  mx-auto">
    <button>
      <div className="flex items-center space-x-2">
        <h2 className="text-black dark:text-white font-bold text-2xl">ក្រុមហ៊ុន</h2>
      </div>
    </button>

    {/* Desktop Menu */}
    <div className="hidden lg:block">
      <ul className="flex space-x-10 text-base text-black/60 dark:text-white">
        <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
          <Link href="#">អំពីរពួកយើង</Link>
        </li>
        <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
          <Link href="#">យល់ដឹងពីចោរ</Link>
        </li>
        <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
          <Link href="#">ព័ត៏មានអំពីចោរ</Link>
        </li>
        <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
          <Link href="#">ទំនាក់ទំនង</Link>
        </li>
      </ul>
    </div>

    {/* Auth Buttons */}
    <div className="hidden lg:flex lg:items-center gap-x-2">
      <button className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold">
        ចុះឈ្មោះ
      </button>
      <button className="flex items-center justify-center rounded-md bg-[#165591] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
        ចូល
      </button>
    </div>

    {/* Mobile Hamburger Icon */}
    <div className="flex items-center justify-center lg:hidden">
      <button className="focus:outline-none text-slate-200 dark:text-white">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</nav>

    </div>
  );
}
