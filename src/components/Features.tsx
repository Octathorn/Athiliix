import F1 from '../assets/F1.svg'
import F2 from '../assets/F2.svg'
import F3 from '../assets/F3.svg'
import F4 from '../assets/F4.svg'
import F5 from '../assets/F5.svg'
import F6 from '../assets/F6.svg'
import ATHLIIX from '../assets/athliix.svg'
import "../App.css"
const features = [
  {
    id: 1,
    title: "Personalized Workout Plans",
    description:
      "Design and customize training plans tailored to different fitness levels and goals, with detailed exercise guidance.",
    icon: F1,
  },
  {
    id: 2,
    title: "Challenge Mode",
    description: "Participate in timed or goal-based fitness challenges to test endurance, strength, and skill.",
    icon: F2,
  },
  {
    id: 3,
    title: "Nutrition Tips & Guidance",
    description: "Get expert recommendations for diet plans that align with your fitness goals.",
    icon: F3,
  },
  {
    id: 4,
    title: "Progress Tracking",
    description: "Monitor performance, achievements, and improvements with easy-to-read analytics.",
    icon: F4,
  },
  {
    id: 5,
    title: "Social Interaction",
    description: "Connect with friends, share progress, and motivate each other through community features.",
    icon: F5,
  },
  {
    id: 6,
    title: "Gamified Rewards",
    description: "Earn badges, points, and rewards for completing workouts and winning challenges.",
    icon: F6,
  },
]

export const Features = () => {
  return (
    <section id='pricing' className="relative w-full py-16 px-4 md:px-8 lg:px-16">
      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-1/2 w-[3%] -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/40 to-white/20 blur-2xl opacity-50" />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Text content and ATHLIIX background */}
          <div className="relative">
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 urbanist-700">
                Our Features
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed poppins-medium w-3/4">
                Discover the tools and experiences that make your fitness journey engaging,
                competitive, and results-driven
              </p>
            </div>
            {/* Large ATHLIIX text as background */}
            <div className="inset-0 flex items-center justify-center opacity-90 hidden lg:flex">
              <img src={ATHLIIX} alt="" />
            </div>

          </div>

          {/* Right side - Features grid */}
          <div className="grid md:grid-cols-2 text-center gap-6">
            {features.map((feature) => {
              return (
                <div
                  key={feature.id}
                  className="bg-simple-dark p-6 rounded-2xl hover:bg-gray-800 transition-colors  group"
                >
                  <div className="mb-4 flex justify-center">
                    <img src={feature.icon} alt="" className='center' />
                  </div>
                  <h3 className="text-2xl  text-white mb-3 urbanist-700">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed poppins-medium">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

