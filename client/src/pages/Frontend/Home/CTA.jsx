import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CTA() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="cta bg-green-600 text-white py-20"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 font-sans">
          Join thousands of people who are already fighting hunger in their communities
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Start Donating Button with Leaf Icon */}
          <a
            href="/signup"
            className="px-6 py-3 rounded-full border-2 text-white bg-green-600 font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
            data-aos="zoom-in"
          >
            <i className="fas fa-leaf"></i>
            Get Started Today
          </a>

          <a
            href="/contact"
            className="px-6 py-3 rounded-full border-2 border-green-100 text-green-400 bg-white hover:text-white font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <i className="fas fa-phone"></i>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
