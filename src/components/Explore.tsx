import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Clock,
  Dumbbell,
  BarChart3,
  Users,
  Medal,
  Flame,
  Target,
  Award,
} from "lucide-react"
import "../App.css"
const programCards = [
  {
    id: 1,
    title: "Interactive Workout Challenges",
    description: "Compete with friends or global players.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Time-Based Competitions",
    description: "Beat the clock and set new personal records.",
    icon: Clock,
  },
  {
    id: 3,
    title: "Variety of Workouts",
    description: "From push-ups to skipping rope, keep it fresh.",
    icon: Dumbbell,
  },
  {
    id: 4,
    title: "Live Leaderboards",
    description: "See where you rank against others.",
    icon: BarChart3,
  },
  {
    id: 5,
    title: "Team Competitions",
    description: "Join forces with friends and conquer challenges together.",
    icon: Users,
  },
  {
    id: 6,
    title: "Achievement Badges",
    description: "Unlock medals as you hit milestones in your journey.",
    icon: Medal,
  },
  {
    id: 7,
    title: "Streak Tracking",
    description: "Stay motivated by maintaining daily workout streaks.",
    icon: Flame,
  },
  {
    id: 8,
    title: "Targeted Goals",
    description: "Focus on weight loss, endurance, or muscle gain with goal-driven programs.",
    icon: Target,
  },
  {
    id: 9,
    title: "Exclusive Rewards",
    description: "Win awards and recognition for being a top performer.",
    icon: Award,
  },
]

export const ExploreProgram = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programCards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + programCards.length) % programCards.length)
  }

  return (
    <section id="program" className="w-full py-16 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white urbanist-700">
            Explore Our Program
          </h2>

          {/* Navigation arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#EE5A00] hover:bg-[#d14d00] transition-colors flex items-center justify-center text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / Math.min(programCards.length,4))}%)`,
            }}
          >
            {programCards.map((card, index) => {
              const IconComponent = card.icon
              const isHighlighted = index === currentIndex 
              return (
                <div
                  key={card.id}
                  className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 rounded-2xl transition-all duration-300 ${
                    isHighlighted
                      ? "bg-[#EE5A00] text-white"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 poppins-lg">{card.title}</h3>
                  <p className="text-sm opacity-90 poppins-medium">{card.description}</p>
                </div>
              )
            })}
          </div>
        </div>

       
      </div>
    </section>
  )
}
