import React from 'react';



const Subscribe = () => {
  return (
    <div className="bg-gradient-to-br from-green-800 via-green-900 to-green-950 py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-4">
              Subscribe to our
              <span className="block text-green-300">newsletter</span>
            </h2>
            <p className="text-green-100 text-lg md:text-xl opacity-90 max-w-md mx-auto lg:mx-0">
              Stay updated with our latest news, tips, and exclusive offers delivered straight to your inbox.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 md:px-6 md:py-4 border-2 border-green-600 bg-white/10 backdrop-blur-sm text-white placeholder-green-200 rounded-xl focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all duration-300 text-base md:text-lg"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300/50 text-base md:text-lg whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>

            <p className="text-green-200 text-sm mt-4 text-center sm:text-left opacity-80">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-300/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe