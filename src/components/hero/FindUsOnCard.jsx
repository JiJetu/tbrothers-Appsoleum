import { ICONS } from "../../assets";

function FindUsOnCard() {
  return (
    <div className="bg-[#030728]/40 border border-white/10 rounded-[24px] p-5 md:p-3 lg:p-5 backdrop-blur-md w-full md:w-[200px] lg:w-[260px] flex flex-col gap-3">
      <p className="text-white font-medium text-center md:text-sm text-base lg:text-base">
        Find us on
      </p>

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
            className="w-8 h-8 lg:w-12 lg:h-12 object-contain bg-[#D9ECFB] rounded-xl p-2 md:p-1 lg:p-2"
          />
          <div className="flex flex-col text-left gap-1">
            <span className="lg:text-[10px] text-[8px] uppercase tracking-wider text-black/60 leading-none">
              Download on the
            </span>
            <span className="font-medium text-[12px] lg:text-[15px] leading-tight font-poppins">
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
            className="w-8 h-8 lg:w-12 lg:h-12 object-contain bg-[#D9ECFB] rounded-xl p-2 md:p-1 lg:p-2"
          />
          <div className="flex flex-col text-left gap-1">
            <span className="lg:text-[10px] text-[8px] uppercase tracking-wider text-black/60 leading-none">
              GET IT ON
            </span>
            <span className="font-medium text-[12px] lg:text-[15px] leading-tight font-poppins">
              Google Play
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default FindUsOnCard;