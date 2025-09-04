import PlayStore from '../../assets/PlayStore.svg';

export const GooglePlayButton = () => (
  <a
    href="#"
    className="flex items-center bg-black text-white rounded-lg px-3 md:px-4 py-2 hover:opacity-90 transition gap-2"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div>
      <img src={PlayStore} alt="Google Play" className="w-5 h-5 md:w-5 md:h-5 object-contain bg-blend-color-burn bg-black" />
    </div>
    <div className="flex flex-col items-start leading-none">
      <span className="text-[8px] md:text-[8px] uppercase text-gray-200 poppins-400">Get it on</span>
      <span className="font-semibold text-xs lg:text-sm poppins-medium">Google Play</span>
    </div>
  </a>
);
