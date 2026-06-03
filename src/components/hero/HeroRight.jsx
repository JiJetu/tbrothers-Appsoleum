import { ICONS, IMAGES } from "../../assets";
import "./hero.css";

function HeroRight() {
  return (
    <div className="w-full h-full flex flex-col justify-end items-center md:items-end">
      {/* Mobile-only Image Banner */}
      <div className="relative w-full h-[380px] md:hidden overflow-hidden mt-6 rounded-[20px]">
        {/* Gradient fade from dark hero background into the image */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#030728] to-transparent z-10 hidden md:block"></div>

        <img
          src={IMAGES.bannerBehind}
          alt="Appsoleum Experience"
          className="w-full h-full object-cover object-[70%_20%] hidden md:block"
        />
        <img
          src={IMAGES.bannerBehindMobile}
          alt="Appsoleum Experience"
          className="w-full h-full object-cover object-[70%_cover] md:hidden"
        />

        {/* Find us on Card (Centered at the bottom of mobile image) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full">
          <FindUsOnCard />
        </div>
      </div>

      {/* Desktop-only Find us on Card (placed at the bottom right) */}
      <div className="hidden md:block mb-10 mr-10 z-20">
        <FindUsOnCard />
      </div>
    </div>
  );
}

function FindUsOnCard() {
  return (
    <div className="bg-[#030728]/40 border border-white/10 rounded-[24px] p-5 backdrop-blur-md w-full md:w-[260px] flex flex-col gap-3">
      <p className="text-white font-medium text-center">Find us on</p>

      <div className="flex flex-row md:flex-col gap-3">
        {/* App Store */}
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-slate-100 text-black flex items-center gap-3 px-2 md:px-4 py-2 rounded-xl transition-all duration-200 flex-1"
        >
          <img
            src={ICONS.apple}
            alt="Apple logo"
            className="w-8 h-8 md:w-12 md:h-12 object-contain bg-[#D9ECFB] rounded-xl p-2"
          />
          <div className="flex flex-col text-left gap-1">
            <span className="md:text-[10px] text-[8px] uppercase tracking-wider text-black/60 leading-none">
              Download on the
            </span>
            <span className="font-medium text-[12px] md:text-[15px] leading-tight font-poppins">
              APP STORE
            </span>
          </div>
        </a>

        {/* Google Play */}
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-slate-100 text-black flex items-center gap-3 px-2 md:px-4 py-2 rounded-xl transition-all duration-200"
        >
          <img
            src={ICONS.playStore}
            alt="Google Play logo"
            className="w-8 h-8 md:w-12 md:h-12 object-contain bg-[#D9ECFB] rounded-xl p-2"
          />
          <div className="flex flex-col text-left gap-1">
            <span className="md:text-[10px] text-[8px] uppercase tracking-wider text-black/60 leading-none">
              GET IT ON
            </span>
            <span className="font-medium text-[12px] md:text-[15px] leading-tight font-poppins">
              Google Play
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default HeroRight;
