'use client';
import init from '@/app/data/init'
import { useParams } from 'next/navigation';
import React from 'react'

export default function page() {
  const params = useParams();
  const { id } = params;
  const card = init();
  const cards = card.find(car => car.id === Number(id));

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: '500px',
          backgroundImage: `url(${cards?.src})`,
        }}
        title="Woman holding a mug"
      ></div>

      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">{cards?.title}</h1>

            <p className="text-base leading-8 my-5">
              {cards?.description}.
            </p>
            <p>Source: <a href={cards?.source} target="_blank" rel="noopener noreferrer">{cards?.source}</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
