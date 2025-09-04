import { AppStoreButton } from "./Buttons/AppStoreButton"
import { GooglePlayButton } from "./Buttons/GooglePlayButton"
import PlayButton from "../assets/Search.svg"
import Mobile from "../assets/Mobiles.svg"
import "../App.css"

export function Hero() {
  return (
    <section className="relative z-10 w-full flex items-center px-4 sm:px-6 lg:px-8 py-5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl urbanist-700 font-bold text-white leading-tight max-w-2xl mx-auto lg:mx-0">
            Turn Every Workout into a Challenge
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed poppins-medium">
            Push your limits, compete with others, and track your progress in real-time — workouts have never been this
            exciting.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-6 mt-4">
            <button className="cursor-pointer bg-[#EE5A00] text-white sm:px-2 px-6 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-[#aa4100] transition-colors w-full sm:w-auto poppins-medium">
              Start Your Challenge
            </button>

            <div className="flex items-center gap-2 cursor-pointer">
              <img src={PlayButton} alt="Play Demo" className="w-6 h-6" />
              <span className="text-gray-50 poppins-medium">Watch Demo</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center lg:items-end justify-center gap-6">
          {/* Phone Image */}
          <img
            src={Mobile}
            alt="Mobile Preview"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />

          {/* App Store Buttons */}
          <div className="flex justify-center lg:justify-end gap-4 lg:mr-20">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>
      </div>
    </section>
  )
}
