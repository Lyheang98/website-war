import init from "@/app/data/init";
import { Kantumruy_Pro, Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const kantumruy = Kantumruy_Pro({
  subsets: ["khmer"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-kantumruy",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function BlogCard() {
  const cards = init();

  return (
    <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 font-family font-medium">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="mr-10 text-1xl font-kantumruy font-bold text-amber-800 leading-none md:text-3xl">
          ព័ត៌មានថ្មីៗ
        </h2>
        <a
          href="#"
          className="block pb-1 mt-2 text-base font-black font-Montserrat text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
        >
          យល់ដឹងបន្ថែម
        </a>
      </div>

      <div className="flex flex-wrap -mx-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
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
                    href={`/blog/${card.id}`}
                    className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                  >
                    {card.title}
                  </a>
                  <p className="mb-4 line-clamp-4">{card.description}</p>
                </div>
                <div>
                  <a
                    href={`/blog/${card.id}`}
                    className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                  >
                    អានបន្ថែម
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
