import Image from 'next/image'
import React from 'react'

export default function HeroComponent() {
  return (
    <div className="relative  md:px-12 w-full h-[400px] lg:h-[700px]  overflow-hidden">
        <Image
          src="/images/IMG_5863.PNG"
          alt="Hero Background"
          fill
          priority
          unoptimized
          className="object-cover w-full h-full"
        />

        <div className="absolute pl-2 md:px-20 lg:px-60 inset-0 bg-black/50 flex items-center justify-start">
          <div
            className="text-left px-2 md:px-12 max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              សូមស្វាគមន៍មកកាន់ក្រសួងវេទមន្ត <br /> Don't thai to me
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Thailand is a thiefland in many years start 2008, don't thai to me.
            </p>
          </div>
        </div>
      </div>
  )
}
