import { LuShield } from "react-icons/lu";
import { IMAGES, ICONS } from "../../assets";
import { HERO_DATA, getHeroIconComponent } from "../../data/heroData";

function HeroLeft() {
  return (
    <div className="flex-1 text-center lg:text-left">
      {/* Logo */}
      <img className="size-24 mx-auto lg:mx-0" src={IMAGES.logo} alt="logo" loading="eager" />

      {/* Badge */}
      <div className="my-5">
        <p className="font-semibold text-primary">{HERO_DATA.badge}</p>
      </div>

      {/* Main Heading */}
      <div className="hero-text-shadow">
        <h1 className="font-inter text-2xl md:text-3xl lg:text-[3rem] font-semibold tracking-tight text-white mb-6 flex flex-col">
          <span className="leading-none">
            {HERO_DATA.mainHeading.part1} <br />
          </span>

          <span className="text-primary mt-3">
            {HERO_DATA.mainHeading.part2}
          </span>
        </h1>
      </div>

      {/* Description */}
      <p className="text-white/55 text-base sm:text-lg lg:text-xl leading-relaxed mb-14 max-w-2xl mx-auto lg:mx-0">
        {HERO_DATA.description.intro}
        <span className="text-primary font-medium">
          {" "}
          {HERO_DATA.description.highlights[0]}
        </span>{" "}
        and{" "}
        <span className="text-primary font-medium">
          {HERO_DATA.description.highlights[1]}
        </span>{" "}
        {HERO_DATA.description.outro}
      </p>

      {/* Feature Cards Grid */}
      <div className="hero-features-grid mb-14 mx-auto lg:mx-0">
        {HERO_DATA.features.map((feature) => {
          const IconComponent = getHeroIconComponent(feature.icon);
          return (
            <div key={feature.id} className="space-y-3">
              <div className="p-4 border border-primary rounded-2xl inline-flex items-center justify-center">
                <IconComponent className="text-2xl text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/60 text-xs">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="max-w-xl">
        {/* Trusted by families section */}
        {/* <div className="hero-trusted-card mb-8"> */}
          {/* Header with Shield Icon */}
          {/* <div className="flex items-start gap-3 mb-8">
            <LuShield className="text-4xl text-primary flex-shrink-0 mt-0" />
            <div>
              <h3 className="text-white font-semibold text-xl">
                {HERO_DATA.trustedSection.title}
              </h3>
              <p className="text-white/60 text-sm">
                {HERO_DATA.trustedSection.subtitle}
              </p>
            </div>
          </div> */}

          {/* Metrics Row */}
          {/* <div className="border-t border-[#2C3039] pt-4">
            <div className="grid grid-cols-2 gap-0">
              {HERO_DATA.trustedSection.metrics.map((metric, index) => (
                <div
                  key={metric.id}
                  className={`py-2 ${
                    index === 0 ? "pr-8" : "pl-8 border-l border-[#2C3039]"
                  }`}
                >
                  {metric.showStars ? (
                    <>
                      <div className="flex items-center gap-2 mb-1 text-primary">
                        <span className="text-2xl leading-none">★★★★★</span>
                        <p className="text-2xl font-bold leading-none">
                          {metric.value}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-4xl font-bold text-primary mb-1 leading-tight">
                      {metric.value}
                    </p>
                  )}
                  <p className="text-xs text-white/50">{metric.label}</p>
                </div>
              ))}
            </div>
          </div> */}
        {/* </div> */}
        
        {/* CTA Button */}
        <button className="hero-cta-btn w-full justify-center mb-6 py-4 text-lg font-semibold rounded-xl">
          {HERO_DATA.trustedSection.ctaButton}
        </button>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="hero-store-btn flex-1">
            <img src={ICONS.apple} alt="Apple" className="w-10 h-10" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs">Download on the</span>
              <span className="font-bold text-xl">App Store</span>
            </div>
          </button>
          <button className="hero-store-btn flex-1">
            <img src={ICONS.playStore} alt="Google Play" className="w-10 h-10" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs">Download on the</span>
              <span className="font-bold text-xl">Google Play</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroLeft;
