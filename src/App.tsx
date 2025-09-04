import { Navbar } from "./components/NavBar"
import { Hero } from "./components/Hero"
import X from "./assets/X.svg"
import { Features } from "./components/Features"
import { ExploreProgram } from "./components/Explore"
import { Testimonials } from "./components/Testimonials"
import { TransformFitness } from "./components/Transform"
import { Newsletter } from "./components/NewsLetter"
import { Footer } from "./components/Footer"
import "./App.css"
export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-dark relative overflow-hidden">
      {/* Decorative geometric background */}
      <div className="absolute flex justify-end right-0 top-0 w-full h-full pointer-events-none">
        <img src={X} alt="Decorative Background" className="w-[905px]  h-[700px] object-cover" />
       </div>

      <Navbar />
      <Hero />
      <ExploreProgram/>
      <Features/>
      <Testimonials/>
      <TransformFitness/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
