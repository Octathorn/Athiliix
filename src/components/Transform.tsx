import PicFrame from "../assets/Frame.svg";
import '../App.css'
export const TransformFitness = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-1 lg:order-1">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl urbanist-700 mb-6 md:mb-8 leading-tight hyphens-auto">
              Transform your fitness with exciting challenges and real time competitions.
            </h2>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 poppins-medium">
              {["Compete globally", "Track progress live", "Earn rewards & ranks"].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#EE5A00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-base md:text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 poppins-medium">
              <button className="bg-[#EE5A00] text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-[#d54f00] transition-colors duration-200 text-sm md:text-base">
                Join now
              </button>
              <button className="text-white border border-gray-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-200 text-sm md:text-base">
                Contact us
              </button>
            </div>
          </div>

          {/* Right Content - Responsive Frame Image */}
          <div className="order-2 lg:order-2">
            <div className="w-full flex justify-center lg:justify-end">
              {/* Constrain widths at different breakpoints so the frame scales */}
              <div className="w-full max-w-[360px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[640px] overflow-hidden">
                <img
                  src={PicFrame}
                  alt="Fitness collage"
                  className="w-full h-auto object-contain rounded-xl block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
