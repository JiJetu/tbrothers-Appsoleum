// import { IMAGES } from "../../assets";
import "./hero.css";

function HeroRight() {
  return (
    <div className="flex-1 flex items-center justify-center lg:justify-end w-full h-full">
      <div className="hero-banner-wrapper w-full max-w-[550px] lg:max-w-[650px] relative h-[500px] lg:h-[600px]">
        
        {/* First Phone - Left Bottom */}
        {/* <div className="hero-banner-top animate-float-up absolute bottom-20 left-0 lg:-left-8 w-[45%] lg:w-[42%] z-10">
          <img
            src={IMAGES.bannerTop1}
            alt="Appso Message screen"
            className="rounded-2xl shadow-2xl w-full"
            loading="eager"
            fetchpriority="high"
          />
        </div> */}

        {/* Second Phone - Right Top */}
        {/* <div className="hero-banner-top animate-float-down absolute top-0 right-0 lg:-right-8 w-[45%] lg:w-[42%] z-20">
          <img
            src={IMAGES.bannerTop2}
            alt="Time Capsule Message screen"
            className="rounded-2xl shadow-2xl w-full"
            loading="eager"
            fetchpriority="high"
          />
        </div> */}
      </div>
    </div>
  );
}

export default HeroRight;