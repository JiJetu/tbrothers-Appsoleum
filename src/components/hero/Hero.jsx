
import "./hero.css";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import { IMAGES } from "../../assets";

function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Background Image */}
      <div className="hero-background-image">
        <img
          src={IMAGES.bannerBehind}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative background elements (between background and overlay) */}
      <div className="hero-decorative-elements absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right glow */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #FF6B1A 0%, transparent 70%)",
          }}
        />
        {/* Bottom-left glow */}
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, #FF6B1A 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="hero-gradient-overlay"></div>

      <div className="relative z-10 px-8 sm:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-stretch justify-between min-h-screen py-20 lg:py-16 gap-12 lg:gap-8">
          {/* ====== LEFT: Text Content ====== */}
          <div className="flex-1 flex flex-col justify-center">
            <HeroLeft />
          </div>

          {/* ====== RIGHT: Banner Image Composition ====== */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <HeroRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
