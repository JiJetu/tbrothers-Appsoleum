import { HERO_DATA, getHeroIconComponent } from "../../data/heroData";

function HeroLeft() {
  return (
    <div className="flex-1 text-left flex flex-col justify-center gap-3">
      {/* Badge */}
      <div className="mb-4">
        <p className="text-xs font-bold tracking-widest text-[#FF6B1A] uppercase">
          {HERO_DATA.badge}
        </p>
      </div>

      {/* Main Heading */}
      <div className="hero-text-shadow mb-6">
        <h1
          className="font-inter 
                text-2xl lg:text-[40px] xl:text-[50px] 
                font-bold tracking-tight text-white 
                flex flex-col 
                gap-2 lg:gap-5 
                leading-[1.05]"
        >
          <span>{HERO_DATA.mainHeading.part1}</span>
          <span>{HERO_DATA.mainHeading.part2}</span>
          <span className="text-[#FF6B1A]">{HERO_DATA.mainHeading.part3}</span>
        </h1>
      </div>

      {/* Description */}
      <p className="text-white/60 text-sm lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
        {HERO_DATA.description.intro}
        <span className="text-[#FF6B1A] font-semibold">
          {" "}
          {HERO_DATA.description.highlights[0]}
        </span>{" "}
        and{" "}
        <span className="text-[#FF6B1A] font-semibold">
          {HERO_DATA.description.highlights[1]}
        </span>{" "}
        {HERO_DATA.description.outro}
      </p>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto md:mx-0">
        {HERO_DATA.features.map((feature) => {
          const IconComponent = getHeroIconComponent(feature.icon);
          return (
            <div
              key={feature.id}
              className="flex flex-col md:flex-row md:items-center gap-4 p-4 md:p-2 lg:p-4 rounded-[20px] border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0">
                <IconComponent className="text-xl text-[#FF6B1A]" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-base md:text-sm lg:text-base mb-0.5 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-xs leading-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <button className="w-full sm:w-fit mx-auto md:mx-0 bg-gradient-to-r from-[#FF6B1A] to-[#FF8A3D] hover:from-[#FF8A3D] hover:to-[#FF6B1A] text-white font-semibold px-8 py-3.5 md:px-10 md:py-4 rounded-[14px] shadow-lg shadow-[#FF6B1A]/20 transition-all duration-300 hover:scale-105 active:scale-95 text-base md:text-sm lg:text-base flex justify-center items-center">
        {HERO_DATA.trustedSection.ctaButton}
      </button>
    </div>
  );
}

export default HeroLeft;
