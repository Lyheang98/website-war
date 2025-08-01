import React from 'react'

const testimonials = [
    {
      name: "លោកជំទាវ សាស្ត្រាចារ្យ ឯកតា ហាកនែស្ស",
      role: "រដ្ឋាលេខាធិការ ទទួលបន្ទុកផ្នែកអប់រំ និងក្រមសិលធម៍ធ្មប់",
      feedback: "នៅតែកខ្វល់ខ្វាយ នៅតែចង់ចាំប៉ុន្តែយើងត្រូវតែបន្តទៅមុខ",
    },
    {
      name: "លោក វេជ្ជបណ្ឌិត ចម្លែក",
      role: "",
      feedback: "Don't thai to Cambodia",
    },
    {
      name: "លោក ហេរី ផត់ថឺ",
      role: "",
      feedback: "Find Someone who  obsessed with you like thai obsessed with Cambodia",
    },
  ];

export default function QuoteComponent() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
          Management Quote
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 max-w-sm flex flex-col items-start hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-black text-lg font-bold pt-5">&quot;{testimonial.feedback}&quot;</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}
