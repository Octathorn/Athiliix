import { useState } from "react";
import Star from "../assets/Star.svg";
import Customer1 from "../assets/Human1.svg";
import Customer2 from "../assets/Human2.svg";
import Customer3 from "../assets/Human3.svg";
import Customer4 from "../assets/Human4.svg";
import Arrow from "../assets/arrow.svg";
import '../App'
const Customer = [Customer2, Customer3, Customer4];

const testimonials = [
  {
    id: 1,
    text: "Join this fitness member, the best choice that I've. They're very professional and give you suggestion about what food and nutrition that you can eat",
    name: "Jonathan Edward",
    role: "Office Worker",
    image: Customer1,
  },
  {
    id: 2,
    text: "Amazing app! The workout challenges keep me motivated every day. I've seen incredible results in just 3 months of using ATHLIIX.",
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: Customer2,
  },
  {
    id: 3,
    text: "The personalized workout plans are exactly what I needed. The community support and real-time competitions make fitness fun and engaging.",
    name: "Mike Chen",
    role: "Software Developer",
    image: Customer3,
  },
];

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextSlide = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="community" className="py-16 px-4 md:px-8 lg:px-16 bg-[#161616]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Testimonial Slider */}
          <div className="relative w-full lg:w-2/3 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="w-full flex-shrink-0 bg-simple-dark rounded-2xl p-8 border border-gray-800 relative"
                >
                  {/* Stars */}
                  <div className="flex justify-end gap-1 mb-4 ">
                    {[...Array(5)].map((_, i) => (
                      <img src={Star} alt="star" key={i} className="w-5 h-5" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-white text-md mb-6 leading-relaxed poppins-400">
                    "{t.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white poppins-medium">{t.name}</h4>
                      <p className="text-gray-400 text-sm poppins-medium">{t.role}</p>
                    </div>
                  </div>

                  {/* Small Dots inside card */}
                  <div className="flex justify-center mt-2 gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentTestimonial
                            ? "bg-[#EE5A00] scale-110"
                            : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow between card and content */}
          <div className="hidden lg:flex items-center">
            <img
              src={Arrow}
              alt="next"
              className="w-12 h-12 cursor-pointer transition-transform hover:scale-110"
              onClick={nextSlide}
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-white text-3xl md:text-4xl urbanist-700 mb-8 ">
              What Our Member
              <br />
              Say About Us?
            </h2>

            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex -space-x-3">
                {Customer.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Member ${i + 1}`}
                    className="w-14 h-14 rounded-full border-3 border-[#161616] object-cover"
                  />
                ))}
              </div>
              <p className="text-white urbanist-500">
                10K+ Satisfied Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
