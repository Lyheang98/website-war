'use client';
import Image from "next/image";
import React from "react";
import { Kantumruy_Pro, Montserrat } from 'next/font/google';
import { motion } from "framer-motion";

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

export default function HeroSection() {
  const cards = [
    {
      src: "IMG_5864.JPG",
      category: "Reliable Schemas",
      title: "What Zombies Can Teach You About Food",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet cupiditate?",
    },
    {
      src: "IMG_5864.JPG",
      category: "Client-based Adoption",
      title: "Old School Art",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.",
    },
    {
      src: "IMG_5864.JPG",
      category: "Intellectual Capital",
      title: "5 Things To Do About Rain",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.",
    },
  ];

  return (
    <div>
      {/* 🌄 Section 1: Hero with Background Image & Overlay Text */}
      <div className="relative  md:px-12   w-full h-[700px] overflow-hidden">
        <Image
          src="/IMG_5863.PNG"
          alt="Hero Background"
          fill
          priority
          unoptimized
          className="object-cover w-full h-full"
        />

        {/* ✅ Animated Overlay Text */}
        <div className="absolute p-40 inset-0 bg-black/50 flex items-center justify-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-left px-6 md:px-12 max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              សូមស្វាគមន៍មកកាន់ក្រសួងវេទមន្ត
              <br className="hidden md:block" />
              Don't thai to me
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Thailand is a thiefland in many years start 2008, don't thai to me.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition-all"
            >
              more detail
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* 📰 Section 2: Latest News Cards */}
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 font-family font-medium">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-1xl font-kantumruy font-bold text-amber-800 leading-none md:text-3xl">
            សូមស្តាប់
          </h2>
          <a
            href="#"
            className="block pb-1 mt-2 text-base font-black font-Montserrat text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
          >
            យល់ដឹងពីចោរ
          </a>
        </div>

        <div className="flex flex-wrap -mx-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-70 relative">
                <Image
                  src={card.src}
                  alt="Card img"
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
              </div>

              <div className="flex flex-grow">
                <div className="triangle"></div>

                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                  <div>
                    <a
                      href="#"
                      className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                    >
                      {card.category}
                    </a>
                    <a
                      href="#"
                      className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                    >
                      {card.title}
                    </a>
                    <p className="mb-4">{card.description}</p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
