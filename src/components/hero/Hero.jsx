import "./hero.css";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import Navbar from "../shared/Navbar";
import { IMAGES } from "../../assets";

function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Background Image (Desktop only) */}
      <div className="hidden md:block hero-background-image">
        <img
          src={IMAGES.bannerBehind}
          alt="Background"
          className="w-full object-cover"
        />
      </div>

      {/* Desktop-only Gradient overlays */}
      <div className="hidden md:block hero-overlay-rectangle"></div>
      <div className="hidden md:block hero-overlay-left"></div>

      {/* Decorative background elements (between background and overlay) */}
      <div className="hidden md:block hero-decorative-elements absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right glow */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #FF6B1A 0%, transparent 70%)",
          }}
        />
        {/* Bottom-left glow */}
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #FF6B1A 0%, transparent 70%)",
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

      {/* Navbar overlaying the background */}
      <Navbar />

      <div className="relative z-10 px-8 sm:px-12 xl:px-16 w-full">
        <div className="flex flex-col md:flex-row items-stretch justify-around pt-28 pb-10 md:pb-0 gap-8 md:gap-6 min-h-screen">
          {/* ====== LEFT: Text Content ====== */}
          <div className="flex-1 flex flex-col justify-center">
            <HeroLeft />
          </div>

          {/* ====== RIGHT: Mobile image & Find us on Card ====== */}
          <div className="flex-1 flex items-stretch justify-center md:justify-end">
            <HeroRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
