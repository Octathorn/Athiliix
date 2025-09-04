import { useState } from "react";
import logo from "../assets/logo.svg";
import "../App.css";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 w-full px-6 md:px-12 py-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl md:text-3xl font-bold">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 poppins-medium ">
          <a href="#" className="text-white hover:text-[#EE5A00] transition-colors font-medium">
            Home
          </a>
          <a href="#program" className="text-white hover:text-[#EE5A00] transition-colors font-medium">
            Program
          </a>
          <a href="#pricing" className="text-white hover:text-[#EE5A00] transition-colors font-medium">
            Pricing
          </a>
          <a href="#community" className="text-white hover:text-[#EE5A00] transition-colors font-medium">
            Community
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close (X) icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#161616] rounded-lg shadow-lg p-6">
          <ul className="flex flex-col gap-4 text-white font-medium">
            <li>
              <a href="#" className="hover:text-[#EE5A00] transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EE5A00] transition-colors" onClick={() => setIsOpen(false)}>
                Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EE5A00] transition-colors" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EE5A00] transition-colors" onClick={() => setIsOpen(false)}>
                Community
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
