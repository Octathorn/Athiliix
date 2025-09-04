import apple from '../../assets/apple.jpg';
import '../../App.css';
export const AppStoreButton = () => (
  <a
    href="#"
    className="flex items-center bg-black text-white rounded-lg px-3 md:px-4 py-2 hover:opacity-90 transition gap-2"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div>
      <img src={apple} alt="App Store" className="w-5 h-5 md:w-8 md:h-8 bg-black object-contain" />
    </div>
    <div className="flex flex-col items-start leading-none ">
      <span className="text-[6px] md:text-[8px] uppercase text-gray-200 poppins-400">Download on</span>
      <span className="font-semibold text-xs lg:text-sm poppins-medium">App Store</span>
    </div>
  </a>
);
