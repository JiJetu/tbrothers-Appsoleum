import { IMAGES } from "../../assets";

export default function YourStory() {
  return (
    <section className="bg-[#0A1428]">
      {/* ==================== MOBILE ==================== */}
      <div className="md:hidden">
        <div className="px-6 pt-12 pb-10">
          <h1 className="text-3xl font-bold leading-tight text-white">
            Your Story. Their Future.
          </h1>

          <h2 className="text-[#FF6B1A] text-4xl font-bold leading-tight mt-1">
            Your Legacy Lives On.
          </h2>

          <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-sm mx-auto">
            Start your legacy today and give the gift of your love, wisdom and
            voice.
          </p>

          <button className="mt-8 w-full bg-[#FF6B1A] hover:bg-[#FF8A3D] transition-all text-white font-semibold py-4 rounded-xl text-lg shadow-lg shadow-[#FF6B1A]/30">
            Start Your Legacy
          </button>
        </div>

        <img
          src={IMAGES.yourStoryMobile}
          alt="Family Legacy"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ==================== TABLET & DESKTOP ==================== */}
      <div className="hidden md:flex relative h-[600px] lg:h-[650px] items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.yourStory}
            alt="Family Legacy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 sm:px-12 xl:px-16 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl lg:text-[52px] font-bold leading-[1.1] text-white tracking-tight">
              Your Story. Their Future.
            </h1>

            <h2 className="text-[#FF6B1A] text-4xl lg:text-5xl lg:text-[52px] font-bold leading-[1.05] mt-2 tracking-tight">
              Your Legacy Lives On.
            </h2>

            <p className="mt-6 text-white/80 text-lg lg:text-xl max-w-md leading-relaxed">
              Start your legacy today and give the gift of your love, wisdom and
              voice.
            </p>

            <button className="mt-8 bg-[#FF6B1A] hover:bg-[#FF8A3D] transition-all duration-300 text-white font-semibold px-10 py-4 rounded-xl text-lg shadow-lg shadow-[#FF6B1A]/30 hover:scale-105 active:scale-95">
              Start Your Legacy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
