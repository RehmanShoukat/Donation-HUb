// Testimonials.jsx
import React from "react";

const testimonialsData = [
  {
    avatar: "SM",
    name: "Sarah Martinez",
    role: "Beneficiary",
    text: `"DonateHub helped us during our toughest times. The community support was incredible, and we received assistance when we needed it most. Forever grateful!"`,
    rating: 5,
  },
  {
    avatar: "MJ",
    name: "Michael Johnson",
    role: "Supporter",
    text: `"As a supporter, I love being able to contribute through DonateHub. The platform makes it easy to connect with those in need."`,
    rating: 5,
  },
  {
    avatar: "EW",
    name: "Emily Wilson",
    role: "Volunteer",
    text: `"DonateHub has revolutionized how we handle support distribution in our community. The real-time updates and safety standards are exceptional."`,
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-green-700">
            What People Say About DonateHub
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-semibold">
            Real stories from real people who have experienced the impact of DonateHub
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, idx) => (
            <div
              key={idx}
              className="testimonial-card bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div className="testimonial-content mb-4">
                <div className="quote-icon text-green-600 text-2xl mb-2">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text text-green-700 mb-4 text-lg">
                  {testimonial.text}
                </p>
                <div className="rating text-green-600 text-lg">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <div className="testimonial-author flex items-center mt-4">
                <div className="author-avatar bg-green-600 text-white font-bold h-14 w-14 flex items-center justify-center rounded-full mr-4">
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <h4 className="text-green-800 font-semibold text-2xl ">{testimonial.name}</h4>
                  <p className="text-green-600  text-xl">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
