import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero relative flex flex-col items-center justify-center min-h-screen text-white px-4"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1758435806/larm-rmah-AEaTUnvneik-unsplash_j6rxim.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative flex flex-col items-center justify-center text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          A Meal Shared is a Smile Shared
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-sans mb-6">
          Welcome to Sharekhirah, founded by Umair Ahmed, a visionary dedicated to helping those in need. Alongside her, a
          passionate team — Abdul Rehman, Hasnat, Shajeel, and Kashif — works tirelessly to bridge the gap between abundance and
          hunger. At Sharekhirah, we connect surplus food with those who need it most, striving to create a world where no
          one goes to bed hungry.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link
            to="/"
            className="px-6 py-3 rounded-full border-2 border-white text-white bg-green-600 font-semibold hover:bg-green-700 transition flex items-center gap-2 justify-center"
          >
            <i className="fas fa-hand-holding-heart"></i>
            Start Donating
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full border-2 border-green-100 text-green-500 bg-white font-semibold hover:bg-green-700 transition flex items-center gap-2 justify-center"
          >
            <i className="fas fa-envelope"></i>
            Contact Us
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-8 text-center">
          <div className="stat">
            <div className="stat-number text-2xl sm:text-3xl md:text-4xl font-bold">100K+</div>
            <div className="stat-label text-sm sm:text-base">Meals Distributed</div>
          </div>
          <div className="stat">
            <div className="stat-number text-2xl sm:text-3xl md:text-4xl font-bold">30%</div>
            <div className="stat-label text-sm sm:text-base">Daily Meals Served</div>
          </div>
          <div className="stat">
            <div className="stat-number text-2xl sm:text-3xl md:text-4xl font-bold">500+</div>
            <div className="stat-label text-sm sm:text-base">Active Donors</div>
          </div>
        </div>
      </div>
    </section>
  );
}
