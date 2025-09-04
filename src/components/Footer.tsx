import logo from "../assets/logo.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import Facebook from "../assets/Facebook.svg";
import CopyRight from "../assets/CopyRight.svg";

export const Footer = () => {
  return (
    <footer id="footer" className=" text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between mb-12 gap-10">
          {/* Left - Logo & Description */}
          <div className="lg:max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <img src={logo} alt="Athliix Logo" className="h-16 w-auto" />
            </div>
            <p className="text-white text-sm w-3/4 leading-relaxed poppins-medium">
              Highlight benefits of each exercise, both physical and mental
            </p>
          </div>

          {/* Right - Links (Sitemap, Support, Social Media) */}
          <div className="flex flex-col sm:flex-row lg:justify-end gap-12 flex-1">
            {/* Sitemap */}
            <div>
              <h3 className="text-white text-lg  mb-4 urbanist-700">Sitemap</h3>
              <ul className="space-y-2 text-sm  text-white">
                <li><a href="#" className="hover:text-gray-200  poppins-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-gray-200  poppins-400 transition">Promos</a></li>
                <li><a href="#" className="hover:text-gray-200  poppins-400 transition">News & Blog</a></li>
                <li><a href="#" className="hover:text-gray-200  poppins-400 transition">Help Center</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white text-lg urbanist-700 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="hover:text-gray-200  poppins-400 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-200  poppins-400 transition">Support Center</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white text-lg urbanist-700 mb-4">Social Media</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#EE5A00] transition"
                >
                  <img src={Instagram} alt="Instagram" className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#EE5A00] transition"
                >
                  <img src={Twitter} alt="Twitter" className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#EE5A00] transition"
                >
                  <img src={Facebook} alt="Facebook" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={CopyRight} alt="Copyright" />
              <p className="text-gray-400 text-sm poppins-medium">2025 ATHLIIX</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition poppins-medium">Terms of Service</a>
              <a href="#" className="hover:text-white transition poppins-medium">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
